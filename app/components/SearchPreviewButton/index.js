/**
*
* SearchPreviewButton
*
*/

import React, { PropTypes } from 'react';

import YoutubeSidebarIconButton from 'components/YoutubeSidebarIconButton';
import Icon from 'material-ui/svg-icons/action/visibility';


const SearchPreviewButton = ({ onClick }) => (
  <YoutubeSidebarIconButton
    tooltip="Preview video"
    onClick={onClick}
  >
    <Icon />
  </YoutubeSidebarIconButton>
);

SearchPreviewButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchPreviewButton;
