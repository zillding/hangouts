import { createStructuredSelector } from 'reselect';

import { playlistSelector } from 'containers/Youtube/selectors';

export default createStructuredSelector({
  playlist: playlistSelector,
});
