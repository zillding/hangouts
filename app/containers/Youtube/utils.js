import io from 'socket.io-client';

import { addNotification } from 'containers/App/actions';
import {
  sendRoomName,
  setConnected,
  setSocket,
  setYoutubeState,
  addVideoItem,
  deleteVideoItem,
  playYoututbe,
  playNextVideo,
  playPrevVideo,
  pauseYoutube,
  resumeYoutube,
  syncPlayTime,
} from './actions';

export function setUpSocket(roomName, dispatch) {
  const socket = io();
  dispatch(setSocket(socket));

  socket.on('connect', () => {
    dispatch(setConnected(true));
    if (roomName) {
      dispatch(sendRoomName(roomName));
    }
  });

  socket.on('welcome', data => {
    dispatch(setYoutubeState(data));
  });

  socket.on('action', ({ type, data }) => {
    dispatch(addNotification({
      message: `Action performed: ${type}`,
      level: 'info',
    }));

    switch (type) {
      case 'ADD_VIDEO':
        return dispatch(addVideoItem(data));
      case 'DELETE_VIDEO':
        return dispatch(deleteVideoItem(data));
      case 'PLAY':
        return dispatch(playYoututbe(data));
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
    dispatch(addNotification({
      message: 'Lost connection to server!',
      level: 'error',
    }));
    dispatch(pauseYoutube());
  });
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
