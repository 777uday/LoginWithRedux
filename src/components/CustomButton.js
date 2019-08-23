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
import * as actions from '../actions';

class CustomButton extends Component {

  handleButtonPress(type){
    if(type == 'increment'){
      this.props.incrementCount(this.props.countValue.count);
    } else if(type == 'decrement'){
      this.props.decrementCount(this.props.countValue.count);
    } else if(type == 'reset'){
      this.props.resetCount(0);
    } else if(type == 'login'){
      console.log("CustomButton:login:props:"+JSON.stringify(this.props));
      this.props.loginUsername(this.props.data.loginReducer.username);
    }
  }

  render() {
    return (
        <Button title={this.props.title} onPress={()=>this.handleButtonPress(this.props.type)}/>
    );
  }
}

export default connect(null, actions)(CustomButton);
