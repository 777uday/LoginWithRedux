/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

class Button extends Component {
  render() {
    return (
        <Button title={this.props.title} onPress={()=>alert(this.props.alertmsg)}/>
    );
  }
}

export default Button;
