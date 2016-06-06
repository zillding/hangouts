/**
*
* NavItemVideo
*
*/

import React, { PropTypes } from 'react';

import FlatButton from 'material-ui/FlatButton';
import Icon from 'material-ui/svg-icons/av/videocam';

const style = {
  margin: '10px 24px',
};

const NavItemVideo = ({ active, onClick }) => (
  <FlatButton
    label="Video"
    icon={<Icon />}
    primary={active}
    style={style}
    onClick={active ? () => null : onClick}
  />
);

NavItemVideo.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavItemVideo;
