

import React, { Component } from 'react'

import { 
    Container,  
    Text, 
    Header, 
    Body, 
    Title
} from 'native-base';

class Nav extends Component {
    render() {
        return (
            <View>
                <Header>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                </Header>
                <Container>
                    <Text>Home</Text>
                </Container>
            </View>
        )
    }
}
      
export default Nav