/**
*
* NavItemConnecting
*
*/

import React from 'react';


function NavItemConnecting() {
  return (
    <div className="item">
      <div className="ui active mini inline loader"></div>
      <span style={{ marginLeft: 10 }}>
        Connecting...
      </span>
    </div>
  );
}

export default NavItemConnecting;
