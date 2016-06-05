/**
*
* HideSearchButton
*
*/

import React, { PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';


const HideSearchButton = ({ onClick }) => (
  <IconButton
    tooltip="Close search"
    tooltipPosition="bottom-left"
    onClick={onClick}
  >
    <CloseIcon />
  </IconButton>
);

HideSearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HideSearchButton;
