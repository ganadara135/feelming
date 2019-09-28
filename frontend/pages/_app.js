import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import reducer from '../reducers';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware } from 'redux';
import { initialState } from '../reducers/user';
import { composeWithDevTools } from 'remote-redux-devtools';
import axios from 'axios';
import { LOAD_USER_REQUEST } from '../reducers/user';


const Feelming = ({ Component, store, pageProps }) => {
    return (
        <Provider store={store} >
            <Head>
                <title>Feelming</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.2/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.2/antd" />
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </Provider>
    );
};

Feelming.propTypes = {
    Component: PropTypes.elementType.isRequired,
    store: PropTypes.object.isRequired,
    //pageProps: PropTypes.object.isRequired,
};

Feelming.getInitialProps = async (context) => {
    //console.log(context);
    const { ctx } = context;
    let pageProps = {};
    const state = ctx.store.getState();

    // 로그인 정보 호출하는 부분
    const cookie = ctx.isServer ?  ctx.req.headers.cookies : '';
    if (ctx.isServer && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    if (!state.user.me) {
        ctx.store.dispatch( {
            type: LOAD_USER_REQUEST,
        })
    }
    // 메인 포스트 가져오는 부분
    if (context.Component.getInitialProps) {
        pageProps = await context.Component.getInitialProps(ctx);
    }
    
    return { pageProps };
};

const configureStore = (initialState, options ) => {
    const sagaMiddleware = createSagaMiddleware();
    //const middlewares = [sagaMiddleware];
    const middlewares = [sagaMiddleware, (store) => (next) => (action) => {
        // saga log 파일 보기
        //    console.log(action);
        next(action);
    }];
    const enhancer = process.env.NODE_DEV === 'production'
        ? compose( applyMiddleware(...middlewares))
        : compose(
          applyMiddleware(...middlewares),   // typeof window !== 'undefined'
          !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
        );

    const store = createStore(reducer, initialState, enhancer);
    //sagaMiddleware.run(rootSaga);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

export default withRedux(configureStore)(withReduxSaga(Feelming));

 // _document.js      html, head, body
 // _app.js           root
 // pages             실제 컴포넌트

 //  _error.js    



 /*
// curring 기법,  인자를 넣어주고 결과로 함수를 받음
const middlewares = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}

const hoc = (mapStateToProps) => (Component) => () => {
    console.log("I am hoc");
    return (
        <Component props={mapStateToProps()} />
    )
}

 
// 하이 오더 컴포넌트
hoc(Component)
connect(mapStateToProps)(Component);
*/