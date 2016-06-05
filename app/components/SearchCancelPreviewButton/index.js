/**
*
* SearchCancelPreviewButton
*
*/

import React, { PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/action/visibility-off';


const SearchCancelPreviewButton = ({ onClick }) => (
  <IconButton
    tooltip="Close preview"
    tooltipPosition="top-left"
    onClick={onClick}
  >
    <CloseIcon />
  </IconButton>
);

SearchCancelPreviewButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchCancelPreviewButton;
