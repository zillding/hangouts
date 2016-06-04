/**
*
* NavItemVolume
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

const Ball = () => (
  <span className={styles.ball} />
);

function NavItemVolume({ value }) {
  const array = [];
  for (let i = 0; i < getNumberOfBalls(value); i++) {
    array.push(i);
  }

  return (
    <div className={`item ${styles.container}`}>
    {
      array.map(index =>
        <Ball key={index} />
      )
    }
    </div>
  );
}

NavItemVolume.propTypes = {
  value: PropTypes.number,
};

export default NavItemVolume;


function getNumberOfBalls(value = 0) {
  if (value < 5) return 1;
  if (value < 9) return 2;
  if (value < 12) return 3;
  if (value < 14) return 4;
  return 5;
}
