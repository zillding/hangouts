/**
*
* PeerVideos
*
*/

import React, { PropTypes } from 'react';
import { List } from 'immutable';

const PeerVideos = ({ data, onSelect }) => (
  <span style={{ display: 'flex' }}>
    {
      data.map(({ video, peer }) =>
        <video
          key={peer.id}
          height="150"
          src={video.src}
          id={video.id}
          onClick={() => onSelect(peer.id)}
        />
      )
    }
  </span>
);

PeerVideos.propTypes = {
  data: PropTypes.instanceOf(List).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default PeerVideos;
