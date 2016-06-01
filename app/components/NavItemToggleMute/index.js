/**
*
* NavItemToggleMute
*
*/

import React, { PropTypes } from 'react';


function NavItemToggleMute({ audioIsMuted, onClick }) {
  const cn = audioIsMuted ? 'active grey item' : 'item';

  return (
    <a
      className={cn}
      onClick={onClick}
    >
      <i className="mute icon"></i>
    </a>
  );
}

NavItemToggleMute.propTypes = {
  audioIsMuted: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavItemToggleMute;
