import { createStructuredSelector } from 'reselect';

import { selectVideoId } from 'containers/Youtube/selectors';

export default createStructuredSelector({
  videoId: selectVideoId(),
});
