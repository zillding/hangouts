/**
*
* SearchErrorMessage
*
*/

import React, { PropTypes } from 'react';

const SearchErrorMessage = ({ error }) => (
  <p>
    {error.message}
  </p>
);

SearchErrorMessage.propTypes = {
  error: PropTypes.object.isRequired,
};

export default SearchErrorMessage;
