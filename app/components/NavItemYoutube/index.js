/**
*
* NavItemYoutube
*
*/

import React, { PropTypes } from 'react';


function NavItemYoutube({ currentApp, onClick }) {
  const cn = currentApp === 'youtube' ? 'active red item' : 'item';

  return (
    <a
      className={cn}
      onClick={onClick}
    >
      <i className="youtube play icon"></i>
      YouTube
    </a>
  );
}

NavItemYoutube.propTypes = {
  currentApp: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavItemYoutube;
