/**
*
* PreviewYoutubePlayer
*
*/

import React, { PropTypes } from 'react';
import YouTube from 'react-youtube';


function PreviewYoutubePlayer({ videoId }) {
  const opts = {
    height: '240',
    width: '400',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
    />
  );
}

PreviewYoutubePlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default PreviewYoutubePlayer;
