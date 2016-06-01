/*
 *
 * YoutubeSearchResultItem
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectYoutubeSearchResultItem from './selectors';

export class YoutubeSearchResultItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      This is YoutubeSearchResultItem container !
      </div>
    );
  }
}

const mapStateToProps = selectYoutubeSearchResultItem();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeSearchResultItem);
