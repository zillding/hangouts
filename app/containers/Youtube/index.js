/*
 *
 * Youtube
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { createSelector } from 'reselect';

import { Flex, Item } from 'react-flex';

import { roomNameSelector } from 'containers/App/selectors';
import { selectCurrentApp } from 'containers/HomePage/selectors';
import { selectShowSidebar, selectShowSearch } from './selectors';

import YoutubeSearch from 'containers/YoutubeSearch';
import YoutubePlaylist from 'containers/YoutubePlaylist';
import YoutubePlayer from 'containers/YoutubePlayer';
import YoutubeControl from 'containers/YoutubeControl';
import YoutubeNotice from 'components/YoutubeNotice';

import { setUpSocket } from './utils';

import styles from './styles.css';

class Youtube extends Component {
  componentWillMount() {
    const { roomName, dispatch } = this.props;
    setUpSocket(roomName, dispatch);
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  getSidebar() {
    const { showSidebar, showSearch } = this.props;

    if (!showSidebar) {
      return null;
    }

    return (
      <Item
        flex={1}
        className={styles.sidebar}
      >
        {showSearch ? <YoutubeSearch /> : <YoutubePlaylist />}
      </Item>
    );
  }

  render() {
    const style = this.props.currentApp === 'youtube' ? {} : { display: 'none' };

    return (
      <Flex
        className={styles.container}
        style={style}
      >
        <div className={styles.player}>
          <YoutubePlayer />
          <YoutubeControl />
          <YoutubeNotice />
        </div>
        {this.getSidebar()}
      </Flex>
    );
  }
}

Youtube.propTypes = {
  roomName: PropTypes.string.isRequired,
  currentApp: PropTypes.string.isRequired,
  showSidebar: PropTypes.bool.isRequired,
  showSearch: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(createSelector(
  roomNameSelector,
  selectCurrentApp(),
  selectShowSidebar(),
  selectShowSearch(),
  (roomName, currentApp, showSidebar, showSearch) => ({
    roomName,
    currentApp,
    showSidebar,
    showSearch,
  })
), mapDispatchToProps)(Youtube);
