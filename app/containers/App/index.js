/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import NotificationSystem from 'react-notification-system';

import mapDispatchToProps from './actions';

import Webrtc from 'containers/Webrtc';

import styles from './styles.css';

class App extends Component {
  componentDidMount() {
    this.props.setNotificationSystem(this.refs.notification);
  }

  render() {
    return (
      <div className={styles.container}>
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

export default connect(null, mapDispatchToProps)(App);
