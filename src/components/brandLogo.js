/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Image, Dimensions } from 'react-native';

const BrandLogo = () =>{
    var {width, height} = Dimensions.get('window');
    return (
        <Image
          style={{width: width*0.8, height: height*0.15}}
          source={require('../../assets/brandLogo/logo.png')}
        />
    );
}

export default BrandLogo;
