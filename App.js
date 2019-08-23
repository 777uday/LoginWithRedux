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
    Input
} from 'native-base';
import CustomButton from './src/components/CustomButton';
import CustomText from './src/components/customText';
import LoginForm from './src/components/loginForm'

const store = createStore(reducers);

export default class App extends Component {
  render() {
    var storeState = store.getState();
    return (
      <Provider store={ store }>
        <Header>
          <Body>
            <Title>Login</Title>
          </Body>
        </Header>
        <Container>
            <LoginForm/>
        </Container>
        {/* <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content> */}
        <Footer>
          <FooterTab>
            <CustomButton title={"Login"} type={'login'} data={storeState}/>
          </FooterTab>
        </Footer>
      </Provider>
    );
  }
}

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
