/**
*
* ListItemControl
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

function ListItemControl({ children }) {
  return (
    <div className={styles.listItemControl}>
      {children}
    </div>
  );
}

ListItemControl.propTypes = {
  children: PropTypes.node,
};

export default ListItemControl;
