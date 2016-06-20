import io from 'socket.io-client';

import {
  showNotification,
  sendInitInfo,
  setConnected,
  setYoutubeState,
  addVideoItem,
  deleteVideoItem,
  playYoutube,
  playNextVideo,
  playPrevVideo,
  pauseYoutube,
  resumeYoutube,
  syncPlayTime,
} from './actions';

export function setUpSocket(roomName, dispatch) {
  const socket = io('https://hangouts-youtube-socket-server.herokuapp.com/');

  socket.on('connect', () => {
    dispatch(showNotification('Connect to socket.'));
    dispatch(setConnected(true));
    if (roomName) {
      dispatch(sendInitInfo(roomName));
    }
  });

  socket.on('welcome', data => {
    dispatch(setYoutubeState(data));
  });

  socket.on('action', ({ type, data }) => {
    dispatch(showNotification(`Action performed: ${type}`));

    switch (type) {
      case 'ADD_VIDEO':
        return dispatch(addVideoItem(data));
      case 'DELETE_VIDEO':
        return dispatch(deleteVideoItem(data));
      case 'PLAY':
        return dispatch(playYoutube(data));
      case 'PLAY_NEXT':
        return dispatch(playNextVideo());
      case 'PLAY_PREVIOUS':
        return dispatch(playPrevVideo());
      case 'PAUSE':
        return dispatch(pauseYoutube());
      case 'RESUME':
        return dispatch(resumeYoutube());
      case 'SYNC_TIME':
        return dispatch(syncPlayTime(data));
      default:
        return null;
    }
  });

  socket.on('disconnect', () => {
    dispatch(setConnected(false));
    dispatch(showNotification('Lost connection to server!'));
    dispatch(pauseYoutube());
  });

  return socket;
}

export function getVideoIndex(playlist, videoId) {
  return playlist.findIndex(video => video.id.videoId === videoId);
}

export function getNextVideoId(playlist, currentVideoId) {
  if (!currentVideoId) {
    const first = playlist.first();
    if (first) return first.id.videoId;
    return '';
  }

  const index = getVideoIndex(playlist, currentVideoId) + 1;
  const video = playlist.get(index);
  if (video) return video.id.videoId;
  return '';
}

export function getPreviousVideoId(playlist, currentVideoId) {
  if (!currentVideoId) return '';

  const index = getVideoIndex(playlist, currentVideoId) - 1;
  if (index < 0) return '';
  return playlist.get(index).id.videoId;
}
