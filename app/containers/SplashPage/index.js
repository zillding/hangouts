/*
 *
 * SplashPage
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import { push } from 'react-router-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';
import classNames from 'classnames';

import { setRoomName } from 'containers/App/actions';

// inline these styles to acheive better performance
const containerStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

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

  handleChange(e) {
    const { value } = e.target;
    this.setState({ value });
    if (value.trim()) {
      this.setState({ error: false });
    } else {
      this.setState({ error: true });
    }
  }

  handleSubmit(e) {
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
      <div style={containerStyle}>
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
              <button
                className="ui fluid large teal submit button"
                type="submit"
              >
                OK
              </button>
            </form>
          </div>
          {this.getErrorNode()}
        </div>
      </div>
    );
  }
}

SplashPage.propTypes = {
  goToHome: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    goToHome: () => dispatch(push('/')),
    onSubmit: name => dispatch(setRoomName(name)),
  };
}

export default connect(null, mapDispatchToProps)(SplashPage);
