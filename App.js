/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import reducers from "./src/reducers";
import Button from './src/components/Button'

const store = createStore(reducers);

export default class App extends Component {
  render() {
    var storeState = store.getState();
    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <Text style={styles.welcome}>Count : {store.getState().count} - {storeState.count}</Text>
          <Button title="Increment" alertmsg="Increment"/>
          <Text style={styles.welcome}> </Text>
          <Button title="Decrement" alertmsg='Decrement'/>
        </View>
      </Provider>
    );
  }
}

// const mapStateToProps = state => {
//   console.log("state:");
//   return;
// }

// export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
