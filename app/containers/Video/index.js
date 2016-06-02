/*
 *
 * Video
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentApp } from 'containers/HomePage/selectors';
import { selectMainPeerVideo } from 'containers/Webrtc/selectors';

import Waiting from 'components/Waiting';

import styles from './styles.css';

function Video({ currentApp, data }) {
  if (currentApp !== 'video') {
    return null;
  }

  if (!data) {
    return <Waiting />;
  }

  const { video } = data;

  return (
    <video
      src={video.src}
      id={video.id}
      className={styles.video}
    />
  );
}

Video.propTypes = {
  currentApp: PropTypes.string.isRequired,
  data: PropTypes.shape({
    video: PropTypes.node.isRequired,
    peer: PropTypes.object.isRequired,
  }),
};

export default connect(createStructuredSelector({
  currentApp: selectCurrentApp(),
  data: selectMainPeerVideo(),
}))(Video);
