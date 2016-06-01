/**
*
* SearchAddButton
*
*/

import React, { PropTypes } from 'react';


function SearchAddButton({ isAdding, disabled, onClick }) {
  const cn = isAdding ?
    'ui positive disabled loading icon button' :
    'ui positive icon button';

  return (
    <button
      className={cn}
      disabled={isAdding || disabled}
      onClick={onClick}
    >
      <i className="plus icon"></i>
    </button>
  );
}

SearchAddButton.propTypes = {
  isAdding: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchAddButton;
