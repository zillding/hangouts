/*
 *
 * HomePage
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';

import { createSelector } from 'reselect';

import {
  selectRoomName,
} from 'containers/App/selectors';

class HomePage extends Component {

  componentWillMount() {
    const { roomName, goToSplash } = this.props;
    if (!roomName) {
      goToSplash();
    }
  }

  shouldComponentUpdate = shouldPureComponentUpdate

  render() {
    return (
      <div>
      This is HomePage container !
      </div>
    );
  }
}

HomePage.propTypes = {
  roomName: PropTypes.string.isRequired,
  goToSplash: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    goToSplash: () => dispatch(push('splash')),
  };
}

export default connect(createSelector(
  selectRoomName(),
  roomName => ({ roomName })
), mapDispatchToProps)(HomePage);