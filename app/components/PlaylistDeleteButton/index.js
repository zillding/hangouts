/**
*
* PlaylistDeleteButton
*
*/

import React, { PropTypes } from 'react';


function PlaylistDeleteButton({ loading, disabled, onClick }) {
  const cn = loading ?
    'ui disabled negative icon button loading' :
    'ui negative icon button';

  return (
    <button
      className={cn}
      disabled={loading || disabled}
      style={{ margin: 0 }}
      onClick={onClick}
    >
      <i className="remove icon"></i>
    </button>
  );
}

PlaylistDeleteButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlaylistDeleteButton;
