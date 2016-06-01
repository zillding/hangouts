/**
*
* ListItem
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

function ListItem({ children }) {
  return (
    <div className={styles.listItem}>
      {children}
    </div>
  );
}

ListItem.propTypes = {
  children: PropTypes.node,
};

export default ListItem;
