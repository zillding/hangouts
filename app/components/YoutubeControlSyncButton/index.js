/**
*
* YoutubeControlSyncButton
*
*/

import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Icon from 'material-ui/svg-icons/notification/sync';


const YoutubeControlSyncButton = ({ loading, disabled, onClick }) => (
  <RaisedButton
    label="Sync Play Time"
    icon={<Icon />}
    primary
    disabled={loading || disabled}
    onClick={onClick}
  />
);

YoutubeControlSyncButton.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default YoutubeControlSyncButton;
