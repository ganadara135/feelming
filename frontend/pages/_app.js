import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import reducer from '../reducers';
import withRedux from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware } from 'redux';
import { initialState } from '../reducers/user';
import { composeWithDevTools } from 'remote-redux-devtools';


const Feelming = ({ Component, store, pageProps }) => {
    return (
        <Provider store={store} >
            <Head>
                <title>Feelming</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.2/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.2/antd" />
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
    pageProps: PropTypes.object.isRequired,
};

Feelming.getInitialProps = async (context) => {
    console.log(context);
    const { ctx } = context;
    let pageProps = {};
    if (context.Component.getInitialProps) {
        pageProps = await context.Component.getInitialProps(ctx);
    }
    return { pageProps };
};

export default withRedux((initialState, options ) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer = process.env.NODE_DEV === 'production'
        ? compose( applyMiddleware(...middlewares))
        : compose(
          applyMiddleware(...middlewares),   // typeof window !== 'undefined'
          !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
        );

    const store = createStore(reducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);

    return store;
})(Feelming);


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