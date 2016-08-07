/**
*
* Video
*
*/

import React, { Component, PropTypes } from 'react';

import styles from './styles.css';

class Video extends Component {
  componentDidMount() {
    this.refs.container.appendChild(this.props.video);
  }

  render() {
    return (
      <div
        ref="container"
        className={styles.container}
        onClick={this.props.onClick}
      />
    );
  }
}

Video.propTypes = {
  video: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default Video;
