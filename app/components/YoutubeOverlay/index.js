/**
*
* YoutubeOverlay
*
*/

import React from 'react';

import styles from './styles.css';

function YoutubeOverlay() {
  return (
    <div className={styles.youtubeOverlay}>
      <i className={`youtube square icon ${styles.icon}`}></i>
    </div>
  );
}

export default YoutubeOverlay;
