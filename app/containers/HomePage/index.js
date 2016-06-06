/*
 *
 * HomePage
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';

import { Flex, Item } from 'react-flex';

import mapStateToProps from './selectors';
import mapDispatchToProps from './actions';

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

  shouldComponentUpdate = shouldPureComponentUpdate;

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
        <Navbar />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
