/**
*
* YoutubeSearchInput
*
*/

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';


class YoutubeSearchInput extends Component {

  handleChange = e => this.props.onChange(e.target.value);

  handleEnter = e => {
    if (e.key === 'Enter') {
      const { value, onSearch } = this.props;
      if (value) {
        onSearch(value);
      }
    }
  };

  render() {
    const { isSearching, value } = this.props;
    const cn = classNames('ui fluid left icon input', { loading: isSearching });

    return (
      <div className={cn}>
        <input
          type="text"
          value={value}
          onKeyPress={this.handleEnter}
          onChange={this.handleChange}
          placeholder="Press enter to search..."
        />
        <i className="search icon"></i>
      </div>
    );
  }
}

YoutubeSearchInput.propTypes = {
  isSearching: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default YoutubeSearchInput;
