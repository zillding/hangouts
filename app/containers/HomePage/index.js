/*
 *
 * HomePage
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';

import { Flex, Item } from 'react-flex';

import { createSelector } from 'reselect';

import {
  selectRoomName,
} from 'containers/App/selectors';

import Navbar from 'containers/Navbar';
import Video from 'containers/Video';
import Youtube from 'containers/Youtube';

const containerStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

class HomePage extends Component {

  componentWillMount() {
    const { roomName, goToSplash } = this.props;
    if (!roomName) {
      goToSplash();
    }
  }

  shouldComponentUpdate = shouldPureComponentUpdate

  render() {
    if (!this.props.roomName) {
      return null;
    }

    return (
      <Flex
        column
        alignItems="stretch"
        style={containerStyle}
      >
        <div style={{ paddingBottom: 10 }}>
          <Navbar />
        </div>
        <Item
          flex={1}
          style={{ position: 'relative' }}
        >
          <Video />
          <Youtube />
        </Item>
      </Flex>
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
