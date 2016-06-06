/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { PropTypes } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Webrtc from 'containers/Webrtc';

const containerStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

const App = ({ children }) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div style={containerStyle}>
      {children}
      <Webrtc />
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
