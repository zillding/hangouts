/**
*
* SearchAddButton
*
*/

import React, { PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/svg-icons/av/queue-play-next';


const SearchAddButton = ({ isAdding, disabled, onClick }) => (
  <IconButton
    tooltip="Add to playlist"
    tooltipPosition="top-left"
    disabled={isAdding || disabled}
    onClick={onClick}
  >
    <Icon />
  </IconButton>
);

SearchAddButton.propTypes = {
  isAdding: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchAddButton;
