
import React, { Component } from 'react'

import Login from './login'
import Home from './home'

import { StackNavigator } from 'react-navigation'

export const Navigator = new StackNavigator({
  login: { screen: Login },
  home: { screen: Home },
})

class Nav extends Component {
  render() {
    return (
      <Navigator />
    )
  }
}
      
export default Nav