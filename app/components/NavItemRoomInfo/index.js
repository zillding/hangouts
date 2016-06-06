/**
*
* NavItemRoomInfo
*
*/

import React, { PropTypes } from 'react';

import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import Icon from 'material-ui/svg-icons/action/room';


const NavItemRoomInfo = ({ name }) => (
  <ListItem
    disabled
    leftAvatar={
      <Avatar icon={<Icon />} />
    }
  >
    {name}
  </ListItem>
);

NavItemRoomInfo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavItemRoomInfo;
