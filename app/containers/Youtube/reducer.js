import { fromJS, List } from 'immutable';

import { setUpSocket, getNextVideoId, getPreviousVideoId } from './utils';

import {
  SHOW_NOTIFICATION,
  CLOSE_NOTIFICATION,
  SEND_INIT_INFO,
  SET_CONNECTED,
  SET_SOCKET,
  TOGGLE_SIDEBAR,
  TOGGLE_SEARCH,
  SET_PLAYER,
  SET_YOUTUBE_STATE,
  SET_IS_PLAYING,

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

let socket = null;

const initialState = fromJS({
  isConnected: false,
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
      return state.setIn(['notification', 'open'], false);
    case SET_CONNECTED:
      return state.set('isConnected', payload);

    case SET_SOCKET: {
      const { roomName, dispatch } = payload;
      socket = setUpSocket(roomName, dispatch);
      return state;
    }

    case TOGGLE_SIDEBAR:
      return state.set('showSidebar', !state.get('showSidebar'));
    case TOGGLE_SEARCH:
      return state.set('showSearch', !state.get('showSearch'));
    case SET_PLAYER:
      return state.set('player', payload);
    case SET_YOUTUBE_STATE:
      return state
        .set('playlist', new List(payload.playlist))
        .set('videoId', payload.currentPlayingVideoId)
        .setIn(['isSending', 'roomName'], false);
    case SET_IS_PLAYING:
      return state.set('isPlaying', payload);

    case SEND_INIT_INFO: {
      if (socket && socket.connected) {
        socket.emit('new user', {
          data: {
            roomName: payload,
            playlist: state.get('playlist').toArray(),
            videoId: state.get('videoId'),
          },
        });
      }

      return state.setIn(['isSending', 'roomName'], true);
    }

    case SEND_ADD_VIDEO_ITEM:
      socket.emit('action', {
        type: 'ADD_VIDEO',
        data: payload,
      });
      return state.setIn(['isSending', 'addVideo'], true);
    case SEND_DELETE_VIDEO_ITEM:
      socket.emit('action', {
        type: 'DELETE_VIDEO',
        data: payload,
      });
      return state.setIn(['isSending', 'deleteVideo'], true);
    case SEND_PLAY_YOUTUBE:
      socket.emit('action', {
        type: 'PLAY',
        data: payload,
      });
      return state.setIn(['isSending', 'play'], true);
    case SEND_PLAY_NEXT_VIDEO:
      socket.emit('action', { type: 'PLAY_NEXT' });
      return state.setIn(['isSending', 'playNext'], true);
    case SEND_PLAY_PREV_VIDEO:
      socket.emit('action', { type: 'PLAY_PREVIOUS' });
      return state.setIn(['isSending', 'playPrevious'], true);
    case SEND_PAUSE_YOUTUBE:
      socket.emit('action', { type: 'PAUSE' });
      return state.setIn(['isSending', 'pause'], true);
    case SEND_RESUME_YOUTUBE:
      socket.emit('action', { type: 'RESUME' });
      return state.setIn(['isSending', 'resume'], true);
    case SEND_SYNC_PLAY_TIME: {
      const data = state.get('player').getCurrentTime();
      socket.emit('action', {
        type: 'SYNC_TIME',
        data,
      });
      return state.setIn(['isSending', 'syncTime'], true);
    }

    case ADD_VIDEO_ITEM:
      return state
        .setIn(['isSending', 'addVideo'], false)
        .set('playlist', state.get('playlist').push(payload));
    case DELETE_VIDEO_ITEM:
      return state
        .setIn(['isSending', 'deleteVideo'], false)
        .set('playlist', state.get('playlist').delete(payload));

    case PLAY_YOUTUBE:
      return state
        .setIn(['isSending', 'play'], false)
        .set('videoId', payload);
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
      return state.setIn(['isSending', 'pause'], false);
    case RESUME_YOUTUBE:
      state.get('player').playVideo();
      return state.setIn(['isSending', 'resume'], false);
    case SYNC_PLAY_TIME:
      state.get('player').seekTo(payload);
      return state.setIn(['isSending', 'syncTime'], false);

    default:
      return state;
  }
}

export default youtubeReducer;
