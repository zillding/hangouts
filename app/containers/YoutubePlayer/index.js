/*
 *
 * YoutubePlayer
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import YouTube from 'react-youtube';

import mapStateToProps from './selectors';
import mapDispatchToProps from './actions';

import YoutubeOverlay from 'components/YoutubeOverlay';

class YoutubePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth > 1800 ? 1280 : 853,
    };
  }

  render() {
    const {
      videoId,
      onReady,
      setRTCMute,
    } = this.props;
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
          onPlay={setRTCMute(true)}
          onPause={setRTCMute(false)}
          onEnd={setRTCMute(false)}
          onError={setRTCMute(false)}
        />
        {videoId ? null : <YoutubeOverlay />}
      </div>
    );
  }
}

YoutubePlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
  onReady: PropTypes.func.isRequired,
  setRTCMute: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(YoutubePlayer);
