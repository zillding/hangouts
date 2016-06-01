/*
 *
 * Youtube
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectYoutube from './selectors';

export class Youtube extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      This is Youtube container !
      </div>
    );
  }
}

const mapStateToProps = selectYoutube();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Youtube);
