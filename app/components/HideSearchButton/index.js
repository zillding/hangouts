/**
*
* HideSearchButton
*
*/

import React, { PropTypes } from 'react';


function HideSearchButton({ onClick }) {
  return (
    <button
      className="ui negative icon button"
      style={{ margin: 0 }}
      onClick={onClick}
    >
      <i className="remove icon"></i>
    </button>
  );
}

HideSearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HideSearchButton;
