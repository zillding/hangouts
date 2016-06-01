/**
*
* PlaylistShowSearchButton
*
*/

import React, { PropTypes } from 'react';


function PlaylistShowSearchButton({ onClick }) {
  return (
    <button
      className="ui positive icon button"
      style={{ margin: 0 }}
      onClick={onClick}
    >
      <i className="add icon"></i>
    </button>
  );
}

PlaylistShowSearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlaylistShowSearchButton;
