/**
*
* PlaylistShowSearchButton
*
*/

import React, { PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';


const PlaylistShowSearchButton = ({ onClick }) => (
  <IconButton
    tooltip="Show search"
    tooltipPosition="bottom-left"
    onClick={onClick}
  >
    <SearchIcon />
  </IconButton>
);

PlaylistShowSearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlaylistShowSearchButton;
