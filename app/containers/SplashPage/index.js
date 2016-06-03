/*
 *
 * SplashPage
 *
 */

import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
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
  minWidth: 400,
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

  getErrorNode() {
    if (!this.state.error) {
      return null;
    }

    return (
      <div className="ui error message">
        <ui className="list">
          <li>Please enter room name.</li>
        </ui>
      </div>
    );
  }

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
    const { error } = this.state;

    return (
      <Flex
        column
        justifyContent="center"
        style={containerStyle}
      >
        <GitHubForkRibbon
          href="https://github.com/zillding/hangouts"
          target="_blank"
          position="right"
        >
          Fork me on GitHub
        </GitHubForkRibbon>
        <div style={segmentStyle}>
          <div className="ui segment">
            <h2>Let's hangout!</h2>
            <form
              className="ui large form"
              onSubmit={this.handleSubmit}
            >
              <div className={classNames('field', { error })}>
                <div className="ui left icon input">
                  <input
                    ref="input"
                    type="text"
                    placeholder="Enter room name..."
                    onChange={this.handleChange}
                  />
                  <i className="home icon"></i>
                </div>
              </div>
              <RaisedButton
                label="OK"
                type="submit"
                primary
              />
            </form>
          </div>
          {this.getErrorNode()}
        </div>
      </Flex>
    );
  }
}

SplashPage.propTypes = {
  goToHome: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SplashPage);
