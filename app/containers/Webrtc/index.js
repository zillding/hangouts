/*
 *
 * Webrtc
 *
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SimpleWebRTC from 'simplewebrtc';

import { setWebrtc } from './actions';

class Webrtc extends Component {

  componentDidMount() {
    const { onReady } = this.props;

    const webrtc = new SimpleWebRTC({
      localVideoEl: this.refs.local,
      remoteVideoEl: '',
      autoRequestMedia: true,
      detectSpeakingEvents: true,
    });

    // webrtc.on('volumeChange', (volume, treshold) => {
    //   if (volume > -45 && volume < -20) {
    //     setVolume(volume + 45)
    //   }
    // });

    onReady(webrtc);
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
  onReady: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onReady: webrtc => dispatch(setWebrtc(webrtc)),
  };
}

export default connect(null, mapDispatchToProps)(Webrtc);
