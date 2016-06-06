/**
*
* PlaylistPlayButton
*
*/

import React, { PropTypes } from 'react';

import YoutubeSidebarIconButton from 'components/YoutubeSidebarIconButton';
import Icon from 'material-ui/svg-icons/av/playlist-play';

const PlaylistPlayButton = ({ loading, disabled, onClick }) => (
  <YoutubeSidebarIconButton
    tooltip="Play"
    disabled={loading || disabled}
    onClick={onClick}
  >
    <Icon />
  </YoutubeSidebarIconButton>
);

PlaylistPlayButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlaylistPlayButton;
