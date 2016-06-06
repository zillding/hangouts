/**
*
* SearchAddButton
*
*/

import React, { PropTypes } from 'react';

import YoutubeSidebarIconButton from 'components/YoutubeSidebarIconButton';
import Icon from 'material-ui/svg-icons/av/queue-play-next';

const SearchAddButton = ({ loading, disabled, onClick }) => (
  <YoutubeSidebarIconButton
    tooltip="Add to playlist"
    disabled={loading || disabled}
    onClick={onClick}
  >
    <Icon />
  </YoutubeSidebarIconButton>
);

SearchAddButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchAddButton;
