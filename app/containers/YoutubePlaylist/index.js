/*
 *
 * YoutubePlaylist
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectYoutubePlaylist from './selectors';

class YoutubePlaylist extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      This is YoutubePlaylist container !
      </div>
    );
  }
}

const mapStateToProps = selectYoutubePlaylist();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubePlaylist);
