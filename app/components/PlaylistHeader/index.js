/**
*
* PlaylistHeader
*
*/

import React from 'react';

import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import ListIcon from 'material-ui/svg-icons/action/list';


const style = {
  padding: '15px 62px',
};

const PlaylistHeader = () => (
  <ListItem
    disabled
    leftAvatar={
      <Avatar
        icon={<ListIcon />}
        size={30}
      />
    }
    style={style}
  >
    Playlist
  </ListItem>
);

export default PlaylistHeader;
