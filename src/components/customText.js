/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux';

class CustomText extends Component {
  render() {
    console.log('props:CustomText:'+JSON.stringify(this.props));
    return (
        <Text style={styles.welcome}>Count : {this.props.count}</Text>
    );
  }
}

const mapStateToProps = state =>{
  console.log('CustomText:'+JSON.stringify(state));
  return {count : state.count};
}

export default connect(mapStateToProps)(CustomText);

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