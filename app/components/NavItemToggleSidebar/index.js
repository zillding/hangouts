/**
*
* NavItemToggleSidebar
*
*/

import React, { PropTypes } from 'react';


function NavItemToggleSidebar({ showSidebar, onClick }) {
  const cn = showSidebar ? 'active blue item' : 'item';

  return (
    <a
      className={cn}
      onClick={onClick}
    >
      <i className="sidebar icon"></i>
      Sidebar
    </a>
  );
}

NavItemToggleSidebar.propTypes = {
  showSidebar: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavItemToggleSidebar;
