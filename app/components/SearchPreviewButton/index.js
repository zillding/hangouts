/**
*
* SearchPreviewButton
*
*/

import React, { PropTypes } from 'react';


function SearchPreviewButton({ onClick }) {
  return (
    <button
      className="ui icon button"
      onClick={onClick}
    >
      <i className="file icon"></i>
    </button>
  );
}

SearchPreviewButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchPreviewButton;
