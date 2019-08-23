          /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { 
    Form,
    Item,
    Input
} from 'native-base';
import * as actions from '../actions';

class LoginForm extends Component {
  render() {
    return (
        <Form>
            <Item>
                <Input placeholder="Username" value={this.props.username } onChangeText={(username)=>this.props.loginUsername(username, this.props.password)} />
            </Item>
            <Item last>
                <Input secureTextEntry placeholder="Password" value={this.props.password} onChangeText={(password)=>this.props.loginPassword(this.props.username, password)}/>
            </Item>
        </Form>
    );
  }
}

const mapStateToProps = state =>{
  return { username:state.loginReducer.username, password:state.loginReducer.password };
}

export default connect(mapStateToProps, actions)(LoginForm);

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