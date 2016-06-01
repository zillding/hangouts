/**
*
* YoutubeVideoInfo
*
*/

import React, { PropTypes } from 'react';
import TimeAgo from 'react-timeago';

import styles from './styles.css';

function YoutubeVideoInfo({ data }) {
  const { snippet } = data;

  return (
    <div className={styles.youtubeVideoInfo}>
      <div className={styles.imgPlaceholder}>
        <img
          className={styles.image}
          src={snippet.thumbnails.default.url}
          alt="thumbnail"
        />
      </div>
      <div>
        <div className={styles.title}>{snippet.title}</div>
        <small>Uploaded by <strong>{snippet.channelTitle}</strong></small>
        <br />
        <small>Published <TimeAgo date={snippet.publishedAt} /></small>
      </div>
    </div>
  );
}

YoutubeVideoInfo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default YoutubeVideoInfo;
