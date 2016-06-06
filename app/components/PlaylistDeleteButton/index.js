/**
*
* PlaylistDeleteButton
*
*/

import React, { PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/svg-icons/av/remove-from-queue';


const PlaylistDeleteButton = ({ loading, disabled, onClick }) => (
  <IconButton
    tooltip="Delete from playlist"
    tooltipPosition="top-left"
    disabled={loading || disabled}
    onClick={onClick}
  >
    <Icon />
  </IconButton>
);

PlaylistDeleteButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlaylistDeleteButton;
