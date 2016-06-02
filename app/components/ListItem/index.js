/**
*
* ListItem
*
*/

import React, { PropTypes } from 'react';

import { Flex } from 'react-flex';

import styles from './styles.css';

function ListItem({ children }) {
  return (
    <Flex
      justifyContent="space-between"
      className={styles.listItem}
    >
      {children}
    </Flex>
  );
}

ListItem.propTypes = {
  children: PropTypes.node,
};

export default ListItem;
