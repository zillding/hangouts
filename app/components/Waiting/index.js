/**
*
* Waiting
*
*/

import React from 'react';

import Icon from 'material-ui/svg-icons/social/people';
import { Flex } from 'react-flex';

import styles from './styles.css';

const iconStyle = {
  height: 46,
  width: 46,
};

const Waiting = () => (
  <Flex
    column
    justifyContent="center"
    className={styles.waiting}
  >
    <Flex>
      <Icon style={iconStyle} />
      <h1 className={styles.text}>
        Waiting for other users to join...
      </h1>
    </Flex>
  </Flex>
);

export default Waiting;
