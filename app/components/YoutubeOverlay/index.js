/**
*
* YoutubeOverlay
*
*/

import React from 'react';

import Icon from 'material-ui/svg-icons/action/theaters';

import styles from './styles.css';

const iconStyle = {
  height: 64,
  width: 64,
};

function YoutubeOverlay() {
  return (
    <div className={styles.youtubeOverlay}>
      <Icon style={iconStyle} />
    </div>
  );
}

export default YoutubeOverlay;
