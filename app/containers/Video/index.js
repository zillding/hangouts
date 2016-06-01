/*
 *
 * Video
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectVideo from './selectors';

export class Video extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      This is Video container !
      </div>
    );
  }
}

const mapStateToProps = selectVideo();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Video);
