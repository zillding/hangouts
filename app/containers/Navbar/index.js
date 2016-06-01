/*
 *
 * Navbar
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { selectRoomName } from 'containers/App/selectors';
import { selectCurrentApp } from 'containers/HomePage/selectors';
import {
  selectAudioIsMuted,
  selectVideoIsPaused,
  selectVolume,
} from 'containers/Webrtc/selectors';
import { selectIsConnected, selectShowSidebar } from 'containers/Youtube/selectors';

import { setApp } from 'containers/HomePage/actions';
import { toggleMute, toggleVideo } from 'containers/Webrtc/actions';
import { toggleSidebar } from 'containers/Youtube/actions';

import NavItemVideo from 'components/NavItemVideo';
import NavItemYoutube from 'components/NavItemYoutube';
import NavItemConnecting from 'components/NavItemConnecting';
import NavItemVolume from 'components/NavItemVolume';
import NavItemToggleMute from 'components/NavItemToggleMute';
import NavItemToggleVideo from 'components/NavItemToggleVideo';
import NavItemToggleSidebar from 'components/NavItemToggleSidebar';

function Navbar(props) {
  const {
    roomName,
    currentApp,
    isConnected,
    volume,
    audioIsMuted,
    videoIsPaused,
    showSidebar,
    setCurrentApp,
    toggleMuteState,
    toggleVideoState,
    toggleSidebarState,
  } = props;

  return (
    <div className="ui large secondary pointing menu">
      <div className="item">
        Hangouts!
      </div>
      <div className="item">
        <i className="home icon"></i>
        {roomName}
      </div>
      <NavItemVideo
        currentApp={currentApp}
        onClick={() => setCurrentApp('video')}
      />
      <NavItemYoutube
        currentApp={currentApp}
        onClick={() => setCurrentApp('youtube')}
      />
      <div className="right menu">
        {
          isConnected ? null : <NavItemConnecting />
        }
        {
          audioIsMuted ? null : <NavItemVolume value={volume} />
        }
        <NavItemToggleMute
          audioIsMuted={audioIsMuted}
          onClick={toggleMuteState}
        />
        <NavItemToggleVideo
          videoIsPaused={videoIsPaused}
          onClick={toggleVideoState}
        />
        {
          currentApp === 'youtube' ?
            <NavItemToggleSidebar
              showSidebar={showSidebar}
              onClick={toggleSidebarState}
            /> :
            null
        }
      </div>
    </div>
  );
}

Navbar.propTypes = {
  roomName: PropTypes.string.isRequired,
  currentApp: PropTypes.string.isRequired,
  isConnected: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  audioIsMuted: PropTypes.bool.isRequired,
  videoIsPaused: PropTypes.bool.isRequired,
  showSidebar: PropTypes.bool.isRequired,
  setCurrentApp: PropTypes.func.isRequired,
  toggleMuteState: PropTypes.func.isRequired,
  toggleVideoState: PropTypes.func.isRequired,
  toggleSidebarState: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    setCurrentApp: app => dispatch(setApp(app)),
    toggleMuteState: () => dispatch(toggleMute()),
    toggleVideoState: () => dispatch(toggleVideo()),
    toggleSidebarState: () => dispatch(toggleSidebar()),
  };
}

export default connect(createSelector(
  selectRoomName(),
  selectCurrentApp(),
  selectIsConnected(),
  selectVolume(),
  selectAudioIsMuted(),
  selectVideoIsPaused(),
  selectShowSidebar(),
  (roomName, currentApp, isConnected, volume, audioIsMuted, videoIsPaused, showSidebar) => ({
    roomName,
    currentApp,
    isConnected,
    volume,
    audioIsMuted,
    videoIsPaused,
    showSidebar,
  })
), mapDispatchToProps)(Navbar);
