/**
*
* SidebarContainer
*
*/

import React, { PropTypes } from 'react';

import { Flex } from 'react-flex';

import styles from './styles.css';

const SidebarContainer = ({ children }) => (
  <Flex
    column
    alignItems="stretch"
    className={styles.sidebarContainer}
  >
    {children}
  </Flex>
);

SidebarContainer.propTypes = {
  children: PropTypes.node,
};

export default SidebarContainer;
