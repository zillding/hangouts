import { createStructuredSelector } from 'reselect';

import { videoIdSelector } from 'containers/Youtube/selectors';

export default createStructuredSelector({
  videoId: videoIdSelector,
});
