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
import CustomButton from './src/components/CustomButton';
import CustomText from './src/components/customText';

const store = createStore(reducers);

export default class App extends Component {
  render() {
    var storeState = store.getState();
    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <CustomText />
          <CustomButton title="Increment" type="increment" countValue={storeState}/>
          <Text style={styles.welcome}> </Text>
          <CustomButton title="Decrement" type='decrement' countValue={storeState}/>
          <Text style={styles.welcome}> </Text>
          <CustomButton title="Reset" type='reset' countValue={storeState}/>
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
