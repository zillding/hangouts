import { fromJS, List } from 'immutable';

import { getNextVideoId, getPreviousVideoId } from './utils';

import {
  SHOW_NOTIFICATION,
  CLOSE_NOTIFICATION,
  SEND_ROOM_NAME,
  SET_CONNECTED,
  SET_SOCKET,
  TOGGLE_SIDEBAR,
  TOGGLE_SEARCH,
  SET_PLAYER,
  SET_YOUTUBE_STATE,

  SEND_ADD_VIDEO_ITEM,
  SEND_DELETE_VIDEO_ITEM,
  SEND_PLAY_YOUTUBE,
  SEND_PLAY_NEXT_VIDEO,
  SEND_PLAY_PREV_VIDEO,
  SEND_PAUSE_YOUTUBE,
  SEND_RESUME_YOUTUBE,
  SEND_SYNC_PLAY_TIME,

  ADD_VIDEO_ITEM,
  DELETE_VIDEO_ITEM,
  PLAY_YOUTUBE,
  PLAY_NEXT_VIDEO,
  PLAY_PREV_VIDEO,
  PAUSE_YOUTUBE,
  RESUME_YOUTUBE,
  SYNC_PLAY_TIME,
} from './constants';

const initialState = fromJS({
  isConnected: false,
  socket: null,
  showSidebar: true,
  showSearch: true,
  player: null,
  playlist: [],
  videoId: '',
  isPlaying: false,
  isSending: {
    roomName: false,
    addVideo: false,
    deleteVideo: false,
    play: false,
    playNext: false,
    playPrevious: false,
    pause: false,
    resume: false,
    syncTime: false,
  },
  notification: {
    open: false,
    message: 'connecting...',
  },
});

function youtubeReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SHOW_NOTIFICATION:
      return state
        .setIn(['notification', 'open'], true)
        .setIn(['notification', 'message'], payload);
    case CLOSE_NOTIFICATION:
      return state
        .setIn(['notification', 'open'], false);
    case SET_CONNECTED:
      return state.set('isConnected', payload);
    case SET_SOCKET:
      return state.set('socket', payload);
    case TOGGLE_SIDEBAR:
      return state.set('showSidebar', !state.get('showSidebar'));
    case TOGGLE_SEARCH:
      return state.set('showSearch', !state.get('showSearch'));
    case SET_PLAYER:
      return state.set('player', payload);
    case SET_YOUTUBE_STATE:
      return state
        .set('playlist', state.get('playlist').merge(new List(payload.playlist)))
        .setIn(['isSending', 'roomName'], false);

    case SEND_ROOM_NAME: {
      const socket = state.get('socket');
      if (socket && socket.connected) {
        socket.emit('new user', { data: payload });
      }

      return state.setIn(['isSending', 'roomName'], true);
    }

    case SEND_ADD_VIDEO_ITEM:
      state.get('socket').emit('action', {
        type: 'ADD_VIDEO',
        data: payload,
      });
      return state.setIn(['isSending', 'addVideo'], true);
    case SEND_DELETE_VIDEO_ITEM:
      state.get('socket').emit('action', {
        type: 'DELETE_VIDEO',
        data: payload,
      });
      return state.setIn(['isSending', 'deleteVideo'], true);
    case SEND_PLAY_YOUTUBE:
      state.get('socket').emit('action', {
        type: 'PLAY',
        data: payload,
      });
      return state.setIn(['isSending', 'play'], true);
    case SEND_PLAY_NEXT_VIDEO:
      state.get('socket').emit('action', { type: 'PLAY_NEXT' });
      return state.setIn(['isSending', 'playNext'], true);
    case SEND_PLAY_PREV_VIDEO:
      state.get('socket').emit('action', { type: 'PLAY_PREVIOUS' });
      return state.setIn(['isSending', 'playPrevious'], true);
    case SEND_PAUSE_YOUTUBE:
      state.get('socket').emit('action', { type: 'PAUSE' });
      return state.setIn(['isSending', 'pause'], true);
    case SEND_RESUME_YOUTUBE:
      state.get('socket').emit('action', { type: 'RESUME' });
      return state.setIn(['isSending', 'resume'], true);
    case SEND_SYNC_PLAY_TIME: {
      const data = state.get('player').getCurrentTime();
      state.get('socket').emit('action', {
        type: 'SYNC_TIME',
        data,
      });
      return state.setIn(['isSending', 'syncTime'], true);
    }

    case ADD_VIDEO_ITEM: {
      const playlist = state.get('playlist');

      const result = state
        .setIn(['isSending', 'addVideo'], false)
        .set('playlist', playlist.push(payload));

      if (playlist.size > 0) {
        return result;
      }

      // if the video to be added is the only one on the playlist,
      // auto play this video
      return result
        .set('videoId', payload && payload.id && payload.id.videoId)
        .set('isPlaying', true);
    }

    case DELETE_VIDEO_ITEM: {
      const playlist = state.get('playlist');
      const video = playlist.get(payload);
      const videoId = video && video.id && video.id.videoId;

      const result = state
        .setIn(['isSending', 'deleteVideo'], false)
        .set('playlist', playlist.delete(payload));

      if (videoId !== state.get('videoId')) {
        return result;
      }

      // if the video to be deleted is the current playing video,
      // auto play next video
      const nextVideoId = getNextVideoId(playlist, state.get('videoId'));

      if (nextVideoId) {
        return result
          .set('videoId', nextVideoId)
          .set('isPlaying', true);
      }

      // if the video to be deleted is the only video in playlist,
      // also set the playing state to false
      return result
        .set('videoId', '')
        .set('isPlaying', false);
    }

    case PLAY_YOUTUBE:
      return state
        .setIn(['isSending', 'play'], false)
        .set('videoId', payload)
        .set('isPlaying', !!payload);
    case PLAY_NEXT_VIDEO: {
      const id = getNextVideoId(state.get('playlist'), state.get('videoId'));
      return state
        .setIn(['isSending', 'playNext'], false)
        .set('videoId', id);
    }

    case PLAY_PREV_VIDEO: {
      const id = getPreviousVideoId(state.get('playlist'), state.get('videoId'));
      return state
        .setIn(['isSending', 'playPrevious'], false)
        .set('videoId', id);
    }

    case PAUSE_YOUTUBE:
      state.get('player').pauseVideo();
      return state
        .setIn(['isSending', 'pause'], false)
        .set('isPlaying', false);
    case RESUME_YOUTUBE:
      state.get('player').playVideo();
      return state
        .setIn(['isSending', 'resume'], false)
        .set('isPlaying', true);
    case SYNC_PLAY_TIME:
      state.get('player').seekTo(payload);
      return state.setIn(['isSending', 'syncTime'], false);

    default:
      return state;
  }
}

export default youtubeReducer;
