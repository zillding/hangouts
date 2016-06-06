/**
*
* SearchCancelPreviewButton
*
*/

import React, { PropTypes } from 'react';

import YoutubeSidebarIconButton from 'components/YoutubeSidebarIconButton';
import Icon from 'material-ui/svg-icons/action/visibility-off';


const SearchCancelPreviewButton = ({ onClick }) => (
  <YoutubeSidebarIconButton
    tooltip="Close preview"
    onClick={onClick}
  >
    <Icon />
  </YoutubeSidebarIconButton>
);

SearchCancelPreviewButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchCancelPreviewButton;
