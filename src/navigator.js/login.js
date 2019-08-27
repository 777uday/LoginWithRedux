

import React, { Component } from 'react'

import { 
    Container,  
    Text, 
    Header, 
    Body, 
    Title
} from 'native-base';
import CustomButton from './src/components/CustomButton';
import CustomText from './src/components/customText';
import LoginForm from './src/components/loginForm';
import Loader from './src/components/common/loader';
import BrandLogo from './src/components/brandLogo';

class Nav extends Component {
  render() {
    return (
        <View>
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
        </View>
    )
  }
}
      
export default Nav