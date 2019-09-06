

import React, { Component } from 'react'
import { 
    View
} from 'react-native';
import { 
    Container,  
    Text, 
    Header, 
    Body, 
    Title
} from 'native-base';
import CustomButton from '../components/CustomButton'

class Home extends Component {
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
                <CustomButton title={"Trial1"} type={'trial1'}/>

                <CustomButton title={"Trial2"} type={'trial2'}/>
            </View>
        )
    }
}
      
export default Home