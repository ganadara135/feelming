import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import withRedux from 'next-redux-wrapper';
import {createStore, compose, applyMiddleware } from 'redux';
import { initialState } from '../reducers/user';
import { composeWithDevTools } from 'remote-redux-devtools';


const NodeBird = ({ Component, store }) => {
    return (
        <Provider store={store} >
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.2/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.2/antd" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    );
};

//NodeBird.PropTypes

export default withRedux((initialState, options ) => {
    const middlewares = [];
    const enhancer = compose(
        applyMiddleware(...middlewares),   // typeof window !== 'undefined'
        !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
        );

    const store = createStore(reducer, initialState, enhancer);
    return store;
})(NodeBird);


 // _document.js      html, head, body
 // _app.js           root
 // pages             실제 컴포넌트

 //  _error.js    