/**
*
* NavItemToggleSidebar
*
*/

import React, { PropTypes } from 'react';

import Toggle from 'material-ui/Toggle';


const style = {
  padding: 10,
};

const NavItemToggleSidebar = ({ showSidebar, onClick }) => (
  <div
    className="item"
    style={style}
  >
    <Toggle
      label="Sidebar"
      toggled={showSidebar}
      onToggle={onClick}
    />
  </div>
);

NavItemToggleSidebar.propTypes = {
  showSidebar: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavItemToggleSidebar;
