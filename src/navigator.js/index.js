
import React, { Component } from 'react'

import Login from './login'
import Home from './home'

import { createStackNavigator, createAppContainer } from 'react-navigation';

export const Navigator = new createStackNavigator({
  login: { screen: Login,
    navigationOptions: () => ({
      header: null,
    }),
  },
  home: { screen: Home,
    navigationOptions: () => ({
      header: null,
    }),
  },
},)

const AppContainer = createAppContainer(Navigator);

class Nav extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}
      
export default Nav