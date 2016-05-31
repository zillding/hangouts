/*
 *
 * SplashPage
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class SplashPage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      This is SplashPage container !
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(SplashPage);
