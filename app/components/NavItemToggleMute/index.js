/**
*
* NavItemToggleMute
*
*/

import React, { PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/svg-icons/av/mic-off';

const style = {
  top: 4,
  marginLeft: 20,
  borderRadius: '50%',
};

function getButtonStyle(active) {
  if (!active) return style;
  return Object.assign({}, style, { backgroundColor: 'red' });
}

function getIconStyle(active) {
  if (!active) return {};
  return { fill: 'white' };
}

const NavItemToggleMute = ({ active, onClick }) => (
  <IconButton
    tooltip="Toggle mute"
    disableTouchRipple
    style={getButtonStyle(active)}
    iconStyle={getIconStyle(active)}
    onClick={onClick}
  >
    <Icon />
  </IconButton>
);

NavItemToggleMute.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavItemToggleMute;
