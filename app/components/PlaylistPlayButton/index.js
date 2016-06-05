/**
*
* PlaylistPlayButton
*
*/

import React, { PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import PlayIcon from 'material-ui/svg-icons/av/playlist-play';


const PlaylistPlayButton = ({ loading, disabled, onClick }) => (
  <IconButton
    tooltip="Play"
    tooltipPosition="top-left"
    disabled={loading || disabled}
    onClick={onClick}
  >
    <PlayIcon />
  </IconButton>
);

PlaylistPlayButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlaylistPlayButton;
