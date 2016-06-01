/**
*
* DragHandle
*
*/

import React from 'react';

import styles from './styles.css';

function DragHandle() {
  return (
    <i className={`move icon drag handle ${styles.dragHandle}`}>
    </i>
  );
}

export default DragHandle;
