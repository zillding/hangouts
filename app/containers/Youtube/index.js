/*
 *
 * Youtube
 *
 */

import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';

import { Flex, Item } from 'react-flex';

import mapDispatchToProps from './actions';
import mapStateToProps from './selectors';

import YoutubeNotice from 'components/YoutubeNotice';
import YoutubeControl from 'containers/YoutubeControl';
import YoutubePlayer from 'containers/YoutubePlayer';
import YoutubePlaylist from 'containers/YoutubePlaylist';
import YoutubeSearch from 'containers/YoutubeSearch';

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
        flex={0}
        flexGrow={1}
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
        alignItems="stretch"
        justifyContent="center"
        wrap={false}
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

export default connect(mapStateToProps, mapDispatchToProps)(Youtube);
