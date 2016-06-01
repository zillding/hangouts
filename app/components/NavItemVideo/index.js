/**
*
* NavItemVideo
*
*/

import React, { PropTypes } from 'react';


function NavItemVideo({ currentApp, onClick }) {
  const cn = currentApp === 'video' ? 'active green item' : 'item';

  return (
    <a
      className={cn}
      onClick={onClick}
    >
      <i className="record icon"></i>
      Video
    </a>
  );
}

NavItemVideo.propTypes = {
  currentApp: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavItemVideo;
