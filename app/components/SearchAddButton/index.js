/**
*
* SearchAddButton
*
*/

import React, { PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui/svg-icons/av/playlist-add';


const SearchAddButton = ({ isAdding, disabled, onClick }) => (
  <IconButton
    tooltip="Add to playlist"
    tooltipPosition="top-left"
    disabled={isAdding || disabled}
    onClick={onClick}
  >
    <AddIcon />
  </IconButton>
);

SearchAddButton.propTypes = {
  isAdding: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchAddButton;
