/**
*
* NavItemConnecting
*
*/

import React from 'react';

import RefreshIndicator from 'material-ui/RefreshIndicator';
import { Flex } from 'react-flex';

const style = {
  paddingLeft: 50,
};

const NavItemConnecting = () => (
  <Flex style={style}>
    <RefreshIndicator
      size={36}
      left={0}
      top={10}
      status="loading"
    />
    Connecting...
  </Flex>
);

export default NavItemConnecting;
