/**
*
* NavItemYoutube
*
*/

import React, { PropTypes } from 'react';

import FlatButton from 'material-ui/FlatButton';
import Icon from 'material-ui/svg-icons/av/subscriptions';


const style = {
  margin: '10px 0',
};

const NavItemYoutube = ({ active, onClick }) => (
  <FlatButton
    label="YouTube"
    icon={<Icon />}
    secondary={active}
    style={style}
    onClick={active ? () => null : onClick}
  />
);

NavItemYoutube.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavItemYoutube;
