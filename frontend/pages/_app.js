import React, { Component } from 'react';
import Head from 'next/head';
import Helmet from 'react-helmet';
import App, { Container } from 'next/app';

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

// class Feelming extends App {
//     static getInitialProps(content) {
//     }
//     render() {
//     }
// }

const Feelming = ({ Component, store, pageProps }) => {
    return (
        // <Container>
        <Provider store={store} >
            <Helmet
                title="Feelming"
                htmlAttributes={{ lang: 'ko' }}
                meta={[{
                    charset: 'UTF-8',
                }, {
                    name: 'viewport', 
                    content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
                }, {
                    'http-equiv': 'X-UA-Compatible', content: 'IE=edge',
                }, {
                    name: 'description', content: 'Feelming SNS',
                }, {
                    name: 'og:title', content: 'Feelming',
                }, {
                    name: 'og:description', content: 'Feelming SNS',
                }, {
                    property: 'og:type', content: 'website',
                }, {
                    property: 'og:image', content: 'http://feelming.org/favicon.png',
                }]}
                link={[{
                    rel: 'shortcut icon', href: '/favicon.png',
                    }, {
                        rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css',
                    }, {
                        rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
                    }, {
                        rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
                }]}
            />
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </Provider>
        // </Container>
    );
};

Feelming.propTypes = {
    Component: PropTypes.elementType.isRequired,
    store: PropTypes.object.isRequired,
    // pageProps: PropTypes.object.isRequired,
};

Feelming.getInitialProps = async (context) => {
    //console.log(context);
    const { ctx, Component } = context;
    let pageProps = {};
    const state = ctx.store.getState();

    // 로그인 정보 호출하는 부분
    const cookie = ctx.isServer ?  ctx.req.headers.cookies : '';
    axios.defaults.headers.Cookie = '';
    if (ctx.isServer && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    if (!state.user.me) {
        ctx.store.dispatch( {
            type: LOAD_USER_REQUEST,
        })
    }
    // 메인 포스트 가져오는 부분
    if (Component.getInitialProps) {
        pageProps = await context.Component.getInitialProps(ctx) || {};
    }
    
    return { pageProps };
};

const configureStore = (initialState, options ) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    // const middlewares = [sagaMiddleware, (store) => (next) => (action) => {
    //     // saga log 파일 보기
    //     //    console.log(action);
    //     next(action);
    // }];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose( applyMiddleware(...middlewares))
        : compose(
          applyMiddleware(...middlewares),   // typeof window !== 'undefined'
          !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
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