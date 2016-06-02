/*
 *
 * Webrtc
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SimpleWebRTC from 'simplewebrtc';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { List } from 'immutable';
import { createStructuredSelector } from 'reselect';

import Draggable from 'react-draggable';
import { Flex } from 'react-flex';

import { roomNameSelector } from 'containers/App/selectors';
import {
  selectDisplayPeerVideos,
  selectWebrtc,
} from './selectors';

import {
  addPeerVideo,
  removePeerVideo,
  selectPeerVideo,
  setVolume,
  setWebrtc,
} from './actions';

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

  shouldComponentUpdate = shouldPureComponentUpdate;

  componentDidUpdate(prevProps) {
    const { roomName, webrtc } = this.props;

    if (webrtc && roomName !== prevProps.roomName) {
      webrtc.joinRoom(roomName);
      webrtc.on('videoAdded', this.addVideo.bind(this));
      webrtc.on('videoRemoved', this.removeVideo.bind(this));
    }
  }

  addVideo(video, peer) {
    this.props.addPeer({ video, peer });
  }

  removeVideo(video, peer) {
    this.props.removePeer({ video, peer });
  }

  render() {
    const { peerVideos, onPeerSelect } = this.props;

    return (
      <Draggable
        bounds="parent"
        handle=".drag.handle"
      >
        <Flex className={styles.container}>
          <DragHandle />
          <video
            ref="local"
            height="150"
          />
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
  roomName: PropTypes.string,
  webrtc: PropTypes.object,
  peerVideos: PropTypes.instanceOf(List).isRequired,
  onReady: PropTypes.func.isRequired,
  addPeer: PropTypes.func.isRequired,
  removePeer: PropTypes.func.isRequired,
  setVolumeNumber: PropTypes.func.isRequired,
  onPeerSelect: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onReady: webrtc => dispatch(setWebrtc(webrtc)),
    addPeer: data => dispatch(addPeerVideo(data)),
    removePeer: data => dispatch(removePeerVideo(data)),
    setVolumeNumber: volume => dispatch(setVolume(volume)),
    onPeerSelect: id => dispatch(selectPeerVideo(id)),
  };
}

export default connect(createStructuredSelector({
  roomName: roomNameSelector,
  webrtc: selectWebrtc(),
  peerVideos: selectDisplayPeerVideos(),
}), mapDispatchToProps)(Webrtc);
