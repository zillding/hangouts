/**
*
* YoutubeProgressBar
*
*/

import React from 'react';

import LinearProgress from 'material-ui/LinearProgress';

const style = {
  height: 3,
  position: 'absolute',
  marginTop: -2,
};

const YoutubeProgressBar = () => (
  <LinearProgress style={style} />
);

export default YoutubeProgressBar;
