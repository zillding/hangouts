/*
 *
 * YoutubeControl
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectYoutubeControl from './selectors';

export class YoutubeControl extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      This is YoutubeControl container !
      </div>
    );
  }
}

const mapStateToProps = selectYoutubeControl();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeControl);
