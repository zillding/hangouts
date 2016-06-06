/**
*
* YoutubeControlNextButton
*
*/

import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Icon from 'material-ui/svg-icons/av/skip-next';

const YoutubeControlNextButton = ({ loading, disabled, onClick }) => (
  <RaisedButton
    icon={<Icon />}
    disabled={loading || disabled}
    onClick={onClick}
  />
);

YoutubeControlNextButton.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default YoutubeControlNextButton;
