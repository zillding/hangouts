/**
*
* PlaylistDeleteButton
*
*/

import React, { PropTypes } from 'react';

import YoutubeSidebarIconButton from 'components/YoutubeSidebarIconButton';
import Icon from 'material-ui/svg-icons/av/remove-from-queue';


const PlaylistDeleteButton = ({ loading, disabled, onClick }) => (
  <YoutubeSidebarIconButton
    tooltip="Delete from playlist"
    disabled={loading || disabled}
    onClick={onClick}
  >
    <Icon />
  </YoutubeSidebarIconButton>
);

PlaylistDeleteButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlaylistDeleteButton;
