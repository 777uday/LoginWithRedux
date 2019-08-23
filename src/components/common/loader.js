/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Spinner } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../common/loader.js';

class Loader extends Component {

  render() {
      console.log("Loader:Isloading:"+JSON.stringify(this.props));
    return (
        <Spinner animating={this.props.isLoading1} color='blue' />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    console.log("Loader:mapStateToProps:ownProps:"+JSON.stringify(ownProps));
    console.log("Loader:mapStateToProps:state:"+JSON.stringify(state));
    return { isLoading1 : state.isLoading  };
}

export default connect(mapStateToProps, actions)(Loader);
