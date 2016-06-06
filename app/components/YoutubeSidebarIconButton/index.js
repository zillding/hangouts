/**
*
* YoutubeSidebarIconButton
*
*/

import React, { PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';

const style = {
  top: -5,
};

const YoutubeSidebarIconButton = ({ children, tooltip, disabled, onClick }) => (
  <IconButton
    tooltip={tooltip}
    tooltipPosition="top-left"
    tooltipStyles={style}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </IconButton>
);

YoutubeSidebarIconButton.propTypes = {
  children: PropTypes.node.isRequired,
  tooltip: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default YoutubeSidebarIconButton;
