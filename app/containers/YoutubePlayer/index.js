/*
 *
 * YoutubePlayer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import YouTube from 'react-youtube';

import mapDispatchToProps from './actions';
import mapStateToProps from './selectors';

import YoutubeOverlay from 'components/YoutubeOverlay';

function YoutubePlayer(props) {
  const {
    videoId,
    onReady,
    onPlay,
    onPause,
    onEnd,
    onError,
  } = props;

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
        onPlay={onPlay}
        onPause={onPause}
        onEnd={onEnd}
        onError={onError}
      />
      {videoId ? null : <YoutubeOverlay />}
    </div>
  );
}

YoutubePlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
  onReady: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onEnd: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(YoutubePlayer);
