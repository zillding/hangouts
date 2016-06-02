/**
*
* ListItemControl
*
*/

import React, { PropTypes } from 'react';

import { Item } from 'react-flex';

import styles from './styles.css';

function ListItemControl({ children }) {
  return (
    <Item
      flexShrink={0}
      className={styles.listItemControl}
    >
      {children}
    </Item>
  );
}

ListItemControl.propTypes = {
  children: PropTypes.node,
};

export default ListItemControl;
