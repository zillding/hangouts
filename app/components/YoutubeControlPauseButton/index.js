/**
*
* YoutubeControlPauseButton
*
*/

import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import PauseIcon from 'material-ui/svg-icons/av/pause';


const YoutubeControlPauseButton = ({ loading, disabled, onClick }) => (
  <RaisedButton
    label="Pause"
    icon={<PauseIcon />}
    secondary
    disabled={loading || disabled}
    onClick={onClick}
  />
);

YoutubeControlPauseButton.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default YoutubeControlPauseButton;
