

import React, { Component } from 'react'

import { 
    Container,  
    Text, 
    View,
    Header, 
    Body, 
    Title
} from 'native-base';
import CustomButton from '../components/CustomButton';
import LoginForm from '../components/loginForm';
import Loader from '../components/common/loader';
import BrandLogo from '../components/brandLogo';

class Nav extends Component {
  render() {
      console.log("navigator.js:login:props:"+JSON.stringify(this.props));
    return (
        <View style={{flex:1}}>
            <Header>
                <Body>
                    <Title>Login</Title>
                </Body>
            </Header>
            <Container>
                <View style={{flex:0.5, justifyContent:'center', alignItems:'center'}}>
                    <BrandLogo/>
                </View>
                <View style={{flex:0.5}}>
                    <LoginForm/>
                </View>
                <Loader isLoading = {this.props.isLoading}/>
            </Container>
            <CustomButton title={"Login"} type={'login'} navigation = {this.props.navigation}/>
        </View>
    )
  }
}
      
export default Nav