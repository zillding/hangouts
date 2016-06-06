/**
*
* YoutubeSearchInput
*
*/

import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';

class YoutubeSearchInput extends Component {

  handleChange = e => this.props.onChange(e.target.value);

  handleEnter = e => {
    if (e.key === 'Enter') {
      const { value, onSubmit } = this.props;
      if (value.trim()) {
        onSubmit(value);
      }
    }
  };

  render() {
    const { loading, value } = this.props;

    return (
      <TextField
        hintText="Type search term and press enter."
        fullWidth
        disabled={loading}
        value={value}
        onChange={this.handleChange}
        onKeyDown={this.handleEnter}
      />
    );
  }
}

YoutubeSearchInput.propTypes = {
  loading: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default YoutubeSearchInput;
