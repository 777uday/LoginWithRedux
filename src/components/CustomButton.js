/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Button, Linking } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {trial1} from '../saga'

class CustomButton extends Component {

  handleButtonPress(type){
    const genfun = trial1();
    console.log(`genfun:+${JSON.stringify(genfun)}`);
    if(type == 'increment'){
      this.props.incrementCount(this.props.countValue.count);
    } else if(type == 'decrement'){
      this.props.decrementCount(this.props.countValue.count);
    } else if(type == 'reset'){
      this.props.resetCount(0);
    } else if(type == 'login'){
      // console.log("CustomButton:login:props:"+JSON.stringify(this.props));
      var { username, password } = this.props;
      this.props.loginCall(username, password, this.props.navigation, this.props);
      this.props.isLoading(true);
    } else if(type == 'trial1'){
      var res = genfun.next();
      console.log('genfun:res'+JSON.stringify(res));
      var res = genfun.next();
      console.log('genfun:res'+JSON.stringify(res));
      var res = genfun.next();
      console.log('genfun:res'+JSON.stringify(res));
      var res = genfun.next();
      console.log('genfun:res'+JSON.stringify(res));
      var res = genfun.next();
      console.log('genfun:res'+JSON.stringify(res));
      var res = genfun.next();
      console.log('genfun:res'+JSON.stringify(res));
    } else if(type == 'trial2'){
      var res = genfun.next();
      console.log('genfun:res'+JSON.stringify(res));
    }
  }

  render() {
    return (
        <Button title={this.props.title} onPress={()=>this.handleButtonPress(this.props.type)}/>
    );
  }
}

const mapStateToProps = state =>{
  // console.log('CustomButton:state:'+JSON.stringify(state));
  return { username:state.loginReducer.username, password:state.loginReducer.password };
}

export default connect(mapStateToProps, actions)(CustomButton);
