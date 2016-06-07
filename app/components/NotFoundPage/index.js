/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';

import { Flex } from 'react-flex';

const style = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

const NotFound = () => (
  <Flex
    column
    justifyContent="center"
    style={style}
  >
    <h1>Page Not Found</h1>
    <p>Please go to home page.</p>
  </Flex>
);

export default NotFound;
