/**
*
* PreviewYoutubePlayer
*
*/

import React, { PropTypes } from 'react';
import YouTube from 'react-youtube';

const opts = {
  height: '240',
  width: '400',
  playerVars: {
    autoplay: 1,
  },
};

const PreviewYoutubePlayer = ({ videoId }) => (
  <span>
    <YouTube
      videoId={videoId}
      opts={opts}
    />
  </span>
);

PreviewYoutubePlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default PreviewYoutubePlayer;
