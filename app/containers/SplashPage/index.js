/*
 *
 * SplashPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';

export class SplashPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
