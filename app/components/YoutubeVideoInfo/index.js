/**
*
* YoutubeVideoInfo
*
*/

import React, { PropTypes } from 'react';

import { Flex, Item } from 'react-flex';
import TimeAgo from 'react-timeago';

import styles from './styles.css';

function YoutubeVideoInfo({ data }) {
  const { snippet } = data;

  return (
    <Flex flex={1}>
      <Item
        flex={0}
        className={styles.imgPlaceholder}
      >
        <img
          className={styles.image}
          src={snippet.thumbnails.default.url}
          alt="thumbnail"
        />
      </Item>
      <div>
        <div className={styles.title}>{snippet.title}</div>
        <small>Uploaded by <strong>{snippet.channelTitle}</strong></small>
        <br />
        <small>Published <TimeAgo date={snippet.publishedAt} /></small>
      </div>
    </Flex>
  );
}

YoutubeVideoInfo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default YoutubeVideoInfo;
