/**
*
* YoutubeControlPreviousButton
*
*/

import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Icon from 'material-ui/svg-icons/av/skip-previous';


const YoutubeControlPreviousButton = ({ loading, disabled, onClick }) => (
  <RaisedButton
    label="Play Previous"
    icon={<Icon />}
    disabled={loading || disabled}
    onClick={onClick}
  />
);

YoutubeControlPreviousButton.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default YoutubeControlPreviousButton;
