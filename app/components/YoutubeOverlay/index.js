/**
*
* YoutubeOverlay
*
*/

import React from 'react';

import styles from './styles.css';

const iconStyle = {
  fontSize: '10rem',
  paddingTop: '3rem',
};

function YoutubeOverlay() {
  return (
    <div className={styles.youtubeOverlay}>
      <i
        className="youtube square icon"
        style={iconStyle}
      ></i>
    </div>
  );
}

export default YoutubeOverlay;
