/**
*
* NavItemToggleVideo
*
*/

import React, { PropTypes } from 'react';


function NavItemToggleVideo({ videoIsPaused, onClick }) {
  const cn = videoIsPaused ? 'item' : 'active grey item';

  return (
    <a
      className={cn}
      onClick={onClick}
    >
      <i className="record icon"></i>
    </a>
  );
}

NavItemToggleVideo.propTypes = {
  videoIsPaused: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavItemToggleVideo;
