/**
*
* YoutubeControlButton
*
*/

import React, { PropTypes } from 'react';


const YoutubeControlButton = ({ children, loading, disabled, onClick }) => {
  const cn = loading ?
    'ui basic button loading' :
    'ui basic button';

  return (
    <button
      className={cn}
      disabled={loading || disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

YoutubeControlButton.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default YoutubeControlButton;
