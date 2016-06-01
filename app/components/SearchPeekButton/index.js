/**
*
* SearchPeekButton
*
*/

import React, { PropTypes } from 'react';


function SearchPeekButton({ peeking, onClick }) {
  const iconCn = peeking ? 'remove icon' : 'film icon';
  return (
    <button
      className="ui icon button"
      onClick={onClick}
    >
      <i className={iconCn}></i>
    </button>
  );
}

SearchPeekButton.propTypes = {
  peeking: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchPeekButton;
