/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Spinner, Toast } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../common/loader.js';

class Loader extends Component {

  render() {
      console.log("Loader:Isloading:"+JSON.stringify(this.props));
      var {isLoading, count} = this.props;
    return (
        <Spinner animating={isLoading} color='blue' />
    );
  }
}

const mapStateToProps = (state) => {
    console.log("Loader:mapStateToProps:state:"+JSON.stringify(state));
    return { isLoading : state.isLoading , count:state.count };
}

export default connect(mapStateToProps, actions)(Loader);
