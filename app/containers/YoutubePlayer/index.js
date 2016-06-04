/*
 *
 * YoutubePlayer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import YouTube from 'react-youtube';

import mapStateToProps from './selectors';
import mapDispatchToProps from './actions';

import YoutubeOverlay from 'components/YoutubeOverlay';

const YoutubePlayer = ({ videoId, onReady, setRTCMute }) => {
  const [width, height] = window.innerWidth > 1800 ?
    [1280, 720] : [853, 480];

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
};

YoutubePlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
  onReady: PropTypes.func.isRequired,
  setRTCMute: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(YoutubePlayer);
