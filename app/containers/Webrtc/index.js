/*
 *
 * Webrtc
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SimpleWebRTC from 'simplewebrtc';
import shouldPureComponentUpdate from 'react-pure-render/function';

import { createSelector } from 'reselect';

import {
  selectRoomName,
} from 'containers/App/selectors';
import {
  selectWebrtc,
} from './selectors';

import {
  addPeerVideo,
  removePeerVideo,
  setVolume,
  setWebrtc,
} from './actions';

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
    return (
      <div>
        <video
          ref="local"
          height="150"
        />
      </div>
    );
  }
}

Webrtc.propTypes = {
  roomName: PropTypes.string,
  webrtc: PropTypes.object,
  onReady: PropTypes.func.isRequired,
  addPeer: PropTypes.func.isRequired,
  removePeer: PropTypes.func.isRequired,
  setVolumeNumber: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onReady: webrtc => dispatch(setWebrtc(webrtc)),
    addPeer: data => dispatch(addPeerVideo(data)),
    removePeer: data => dispatch(removePeerVideo(data)),
    setVolumeNumber: volume => dispatch(setVolume(volume)),
  };
}

export default connect(createSelector(
  selectRoomName(),
  selectWebrtc(),
  (roomName, webrtc) => ({ webrtc, roomName })
), mapDispatchToProps)(Webrtc);
