/**
*
* SidebarScrollItem
*
*/

import React, { PropTypes } from 'react';

import { Item } from 'react-flex';

import styles from './styles.css';

const SidebarScrollItem = ({ children }) => (
  <Item className={styles.sidebarScrollItem}>
    {children}
  </Item>
);

SidebarScrollItem.propTypes = {
  children: PropTypes.node,
};

export default SidebarScrollItem;
