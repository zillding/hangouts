/*
 *
 * SplashPage
 *
 */

import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Flex } from 'react-flex';
import GitHubForkRibbon from 'react-github-fork-ribbon';

import mapDispatchToProps from './actions';

// inline these styles to acheive better performance
const containerStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

const segmentStyle = {
  minWidth: 450,
  padding: 20,
};

class SplashPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: false,
    };
  }

  shouldComponentUpdate = shouldPureComponentUpdate

  getGithubRibbon = () => (
    <GitHubForkRibbon
      href="https://github.com/zillding/hangouts"
      target="_blank"
      position="right"
    >
      Fork me on GitHub
    </GitHubForkRibbon>
  )

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
    if (value.trim()) {
      this.setState({ error: false });
    } else {
      this.setState({ error: true });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    if (value) {
      const { goToHome, onSubmit } = this.props;
      onSubmit(value);
      goToHome();
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    const { value, error } = this.state;
    const errorNode = error ? 'room name cannot be empty.' : false;

    return (
      <Flex
        column
        justifyContent="center"
        style={containerStyle}
      >
        {this.getGithubRibbon()}
        <Paper
          zDepth={2}
          style={segmentStyle}
        >
          <h2>Let's hangout!</h2>
          <form onSubmit={this.handleSubmit}>
            <TextField
              floatingLabelText="Enter room name..."
              hintText="my awesome room"
              fullWidth
              errorText={errorNode}
              value={value}
              onChange={this.handleChange}
            />
            <RaisedButton
              label="OK"
              type="submit"
              primary
            />
          </form>
        </Paper>
      </Flex>
    );
  }
}

SplashPage.propTypes = {
  goToHome: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SplashPage);
