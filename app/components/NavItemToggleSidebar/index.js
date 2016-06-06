/**
*
* NavItemToggleSidebar
*
*/

import React, { PropTypes } from 'react';

import Toggle from 'material-ui/Toggle';
import { Flex } from 'react-flex';


const style = {
  marginLeft: 24,
};

const NavItemToggleSidebar = ({ toggled, onClick }) => (
  <Flex style={style}>
    <Toggle
      label="Sidebar"
      toggled={toggled}
      onToggle={onClick}
    />
  </Flex>
);

NavItemToggleSidebar.propTypes = {
  toggled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavItemToggleSidebar;
