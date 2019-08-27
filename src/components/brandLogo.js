/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Image } from 'react-native';

const BrandLogo = () =>{
    return (
        <Image
          style={{width: 220, height: 220}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
    );
}

export default BrandLogo;
