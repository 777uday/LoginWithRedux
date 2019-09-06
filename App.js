/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { trial1 } from './src/saga'
import reducers from "./src/reducers";
import Navigator from './src/navigator.js';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(trial1)
const action = type => store.dispatch({type})

export default class App extends Component {
  render() {
    var storeState = store.getState();
    // console.log("app:storeState:"+JSON.stringify(storeState));
    return (
      <Provider store={ store }>
        <Navigator storeState={storeState}/>
      </Provider>
    );
  }
}
