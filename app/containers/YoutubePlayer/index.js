/*
 *
 * YoutubePlayer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectYoutubePlayer from './selectors';

export class YoutubePlayer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      This is YoutubePlayer container !
      </div>
    );
  }
}

const mapStateToProps = selectYoutubePlayer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubePlayer);
