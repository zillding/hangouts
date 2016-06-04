/*
 *
 * Navbar
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from './actions';
import mapStateToProps from './selectors';

import NavItemConnecting from 'components/NavItemConnecting';
import NavItemToggleMute from 'components/NavItemToggleMute';
import NavItemToggleSidebar from 'components/NavItemToggleSidebar';
import NavItemToggleVideo from 'components/NavItemToggleVideo';
import NavItemVideo from 'components/NavItemVideo';
import NavItemVolume from 'components/NavItemVolume';
import NavItemYoutube from 'components/NavItemYoutube';

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
    setMute,
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
          onClick={() => setMute(!audioIsMuted)}
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
  setMute: PropTypes.func.isRequired,
  toggleVideoState: PropTypes.func.isRequired,
  toggleSidebarState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
