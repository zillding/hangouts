/*
 *
 * Video
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import mapStateToProps from './selectors';

import Waiting from 'components/Waiting';

import styles from './styles.css';

function Video({ show, data }) {
  if (!show) return null;

  if (!data) return <Waiting />;

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
  show: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    video: PropTypes.object.isRequired,
    peer: PropTypes.object.isRequired,
  }),
};

export default connect(mapStateToProps)(Video);
