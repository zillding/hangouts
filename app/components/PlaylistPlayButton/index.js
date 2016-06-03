/**
*
* PlaylistPlayButton
*
*/

import React, { PropTypes } from 'react';


function PlaylistPlayButton({ loading, disabled, onClick }) {
  const cn = loading ?
    'ui disabled icon button loading' :
    'ui icon button';

  return (
    <button
      className={cn}
      disabled={loading || disabled}
      onClick={onClick}
    >
      <i className="play icon"></i>
    </button>
  );
}

PlaylistPlayButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlaylistPlayButton;
