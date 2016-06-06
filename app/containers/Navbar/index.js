/*
 *
 * Navbar
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
} from 'material-ui/Toolbar';

import mapDispatchToProps from './actions';
import mapStateToProps from './selectors';

import NavItemConnecting from 'components/NavItemConnecting';
import NavItemRoomInfo from 'components/NavItemRoomInfo';
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
    <Toolbar>
      <ToolbarGroup>
        <ToolbarTitle text="Hangouts" />
        <NavItemRoomInfo name={roomName} />
        <ToolbarSeparator />
        <NavItemVideo
          active={currentApp === 'video'}
          onClick={() => setCurrentApp('video')}
        />
        <NavItemYoutube
          active={currentApp === 'youtube'}
          onClick={() => setCurrentApp('youtube')}
        />
      </ToolbarGroup>
      <ToolbarGroup>
        {isConnected ? null : <NavItemConnecting />}
      </ToolbarGroup>
      <ToolbarGroup>
        {audioIsMuted ? null : <NavItemVolume value={volume} />}
        <NavItemToggleMute
          active={audioIsMuted}
          onClick={() => setMute(!audioIsMuted)}
        />
        <NavItemToggleVideo
          active={videoIsPaused}
          onClick={toggleVideoState}
        />
        {currentApp === 'youtube' ? <ToolbarSeparator /> : null}
        {
          currentApp === 'youtube' ?
            <NavItemToggleSidebar
              toggled={showSidebar}
              onClick={toggleSidebarState}
            /> :
            null
        }
      </ToolbarGroup>
    </Toolbar>
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
