/*
 *
 * Webrtc
 *
 */

import classNames from 'classnames';
import { List } from 'immutable';
import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';
import SimpleWebRTC from 'simplewebrtc';

import Draggable from 'react-draggable';
import { Flex } from 'react-flex';

import mapDispatchToProps from './actions';
import mapStateToProps from './selectors';

import DragHandle from 'components/DragHandle';
import PeerVideos from 'components/PeerVideos';

import styles from './styles.css';

class Webrtc extends Component {

  componentDidMount() {
    const { onReady, setVolumeNumber } = this.props;

    const webrtc = new SimpleWebRTC({
      localVideoEl: this.refs.local,
      remoteVideoEl: '',
      autoRequestMedia: true,
      detectSpeakingEvents: true,
    });

    webrtc.on('volumeChange', volume => {
      if (volume > -45 && volume < -20) {
        setVolumeNumber(volume + 45);
      }
    });

    onReady(webrtc);
  }

  componentWillReceiveProps(nextProps) {
    const {
      webrtc,
      roomName,
      addPeer,
      removePeer,
    } = nextProps;

    if (this.props.roomName === roomName || !webrtc) return;

    webrtc.joinRoom(roomName);

    webrtc.on('videoAdded', (video, peer) =>
      addPeer({ video, peer })
    );

    webrtc.on('videoRemoved', (video, peer) =>
      removePeer({ video, peer })
    );
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const { peerVideos, currentApp, onPeerSelect } = this.props;

    const cn = classNames(styles.container, {
      [styles.smallVideo]: currentApp !== 'video',
    });

    return (
      <Draggable
        bounds="parent"
        handle=".drag.handle"
      >
        <Flex className={cn}>
          <DragHandle />
          <video ref="local" />
          <PeerVideos
            data={peerVideos}
            onSelect={onPeerSelect}
          />
        </Flex>
      </Draggable>
    );
  }
}

Webrtc.propTypes = {
  webrtc: PropTypes.object,
  roomName: PropTypes.string,
  peerVideos: PropTypes.instanceOf(List).isRequired,
  currentApp: PropTypes.string.isRequired,
  onReady: PropTypes.func.isRequired,
  addPeer: PropTypes.func.isRequired,
  removePeer: PropTypes.func.isRequired,
  setVolumeNumber: PropTypes.func.isRequired,
  onPeerSelect: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Webrtc);
