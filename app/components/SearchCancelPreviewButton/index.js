/**
*
* SearchCancelPreviewButton
*
*/

import React, { PropTypes } from 'react';


function SearchCancelPreviewButton({ onClick }) {
  return (
    <button
      className="ui icon button"
      onClick={onClick}
    >
      <i className="remove icon"></i>
    </button>
  );
}

SearchCancelPreviewButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchCancelPreviewButton;
