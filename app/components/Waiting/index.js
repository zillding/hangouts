/**
*
* Waiting
*
*/

import React from 'react';

import styles from './styles.css';

function Waiting() {
  return (
    <div className={styles.waiting}>
      <h1 className="ui header">
        <i className="users icon"></i>
        <div className="content">
          Waiting for other users to join...
        </div>
      </h1>
    </div>
  );
}

export default Waiting;
