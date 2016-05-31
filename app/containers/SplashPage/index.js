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

import styles from './styles.css';

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
    }
  }

  render() {
    const { error } = this.state;

    return (
      <div className={styles.container}>
        <GitHubForkRibbon
          href="https://github.com/zillding/hangouts"
          target="_blank"
          position="right"
        >
          Fork me on GitHub
        </GitHubForkRibbon>
        <div className={styles.segment}>
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
