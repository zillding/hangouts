/*
 *
 * YoutubeSearch
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectYoutubeSearch from './selectors';

class YoutubeSearch extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      This is YoutubeSearch container !
      </div>
    );
  }
}

const mapStateToProps = selectYoutubeSearch();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeSearch);
