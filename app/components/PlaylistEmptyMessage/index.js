/**
*
* PlaylistEmptyMessage
*
*/

import React, { PropTypes } from 'react';

import Paper from 'material-ui/Paper';
import {
  CardActions,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 20,
  backgroundColor: '#f1f1f1',
};

const PlaylistEmptyMessage = ({ onActionClick }) => (
  <Paper
    zDepth={3}
    style={style}
  >
    <CardTitle
      title="Empty Playlist"
      subtitle="nothing here..."
    />
    <CardText>
      The current playlist is empty. Search and add some YouTube videos!
    </CardText>
    <CardActions>
      <FlatButton
        label="Search"
        primary
        onClick={onActionClick}
      />
    </CardActions>
  </Paper>
);

PlaylistEmptyMessage.propTypes = {
  onActionClick: PropTypes.func,
};

export default PlaylistEmptyMessage;
