/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import NotificationSystem from 'react-notification-system';

import 'semantic-ui-css/semantic.css';

import { setNotificationSystem } from './actions';
import Webrtc from 'containers/Webrtc';

class App extends Component {
  componentDidMount() {
    this.props.setNotificationSystem(this.refs.notification);
  }

  render() {
    return (
      <div>
        {this.props.children}
        <Webrtc />
        <NotificationSystem ref="notification" />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  setNotificationSystem: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    setNotificationSystem: ns => dispatch(setNotificationSystem(ns)),
  };
}

export default connect(null, mapDispatchToProps)(App);
