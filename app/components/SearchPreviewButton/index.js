/**
*
* SearchPreviewButton
*
*/

import React, { PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import PreviewIcon from 'material-ui/svg-icons/action/visibility';


const SearchPreviewButton = ({ onClick }) => (
  <IconButton
    tooltip="Preview video"
    tooltipPosition="top-left"
    onClick={onClick}
  >
    <PreviewIcon />
  </IconButton>
);

SearchPreviewButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchPreviewButton;
