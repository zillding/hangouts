/**
*
* SearchAddLabel
*
*/

import React from 'react';

import IconButton from 'material-ui/IconButton';
import AddedIcon from 'material-ui/svg-icons/av/playlist-add-check';


const SearchAddLabel = () => (
  <IconButton
    tooltip="Added"
    tooltipPosition="top-left"
    disabled
  >
    <AddedIcon />
  </IconButton>
);

export default SearchAddLabel;
