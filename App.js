/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import reducers from "./src/reducers";
import { 
    Container,  
    Text, 
    Header, 
    Body, 
    Title, 
    Footer, 
    FooterTab, 
    Button, 
    Content,
    Form,
    Item,
    Input,
    Spinner
} from 'native-base';
import CustomButton from './src/components/CustomButton';
import CustomText from './src/components/customText';
import LoginForm from './src/components/loginForm';
import Loader from './src/components/common/loader';
import BrandLogo from './src/components/brandLogo';

const store = createStore(reducers);

export default class App extends Component {
  render() {
    var storeState = store.getState();
    console.log("app:storeState:"+JSON.stringify(storeState));
    return (
      <Provider store={ store }>
        <Header>
          <Body>
            <Title>Login</Title>
          </Body>
        </Header>
        <Container>
            <BrandLogo/>
            <LoginForm isLoading={storeState.isLoading}/>
            <Loader/>
        </Container>
        <CustomButton title={"Login"} type={'login'} data={storeState}/>
      </Provider>
    );
  }
}
