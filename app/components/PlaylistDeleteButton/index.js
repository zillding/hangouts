/**
*
* PlaylistDeleteButton
*
*/

import React, { PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';


const PlaylistDeleteButton = ({ loading, disabled, onClick }) => (
  <IconButton
    tooltip="Delete from playlist"
    tooltipPosition="top-left"
    disabled={loading || disabled}
    onClick={onClick}
  >
    <DeleteIcon />
  </IconButton>
);

PlaylistDeleteButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlaylistDeleteButton;
