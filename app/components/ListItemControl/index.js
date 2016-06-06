/**
*
* ListItemControl
*
*/

import React, { PropTypes } from 'react';

import { Item } from 'react-flex';

import styles from './styles.css';

const ListItemControl = ({ children }) => (
  <Item
    flex={0}
    className={styles.listItemControl}
  >
    {children}
  </Item>
);

ListItemControl.propTypes = {
  children: PropTypes.node,
};

export default ListItemControl;
