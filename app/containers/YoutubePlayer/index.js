/*
 *
 * YoutubePlayer
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import YouTube from 'react-youtube';

import { selectVideoId } from 'containers/Youtube/selectors';

import { setPlayer } from 'containers/Youtube/actions';

import YoutubeOverlay from 'components/YoutubeOverlay';

class YoutubePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innnerWidth > 1800 ? 1280 : 853,
    };
  }

  render() {
    const { videoId, onReady } = this.props;
    const { width } = this.state;
    const height = width === 1280 ? 720 : 480;

    const containerStyle = {
      height,
      width,
      marginBottom: 10,
      position: 'relative',
    };

    const opts = {
      height,
      width,
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div style={containerStyle}>
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={e => onReady(e.target)}
        />
        {videoId ? null : <YoutubeOverlay />}
      </div>
    );
  }
}

YoutubePlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
  onReady: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onReady: player => dispatch(setPlayer(player)),
  };
}

export default connect(createSelector(
  selectVideoId(),
  videoId => ({ videoId })
), mapDispatchToProps)(YoutubePlayer);
