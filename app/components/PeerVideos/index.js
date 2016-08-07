/**
*
* PeerVideos
*
*/

import React, { PropTypes } from 'react';
import { List } from 'immutable';

import { Flex } from 'react-flex';

import Video from 'components/Video';

const PeerVideos = ({ data, onSelect }) => (
  <Flex>
    {
      data.map(({ video, peer }) =>
        <Video
          key={peer.id}
          video={video}
          onClick={() => onSelect(peer.id)}
        />
      )
    }
  </Flex>
);

PeerVideos.propTypes = {
  data: PropTypes.instanceOf(List).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default PeerVideos;
