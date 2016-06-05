/**
*
* YoutubeControlResumeButton
*
*/

import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Icon from 'material-ui/svg-icons/av/play-arrow';


const YoutubeControlResumeButton = ({ loading, disabled, onClick }) => (
  <RaisedButton
    label="Resume"
    icon={<Icon />}
    primary
    disabled={loading || disabled}
    onClick={onClick}
  />
);

YoutubeControlResumeButton.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default YoutubeControlResumeButton;
