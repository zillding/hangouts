import { fromJS, List } from 'immutable';

import {
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

import { getNextVideoId, getPreviousVideoId } from './utils';

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
    play: false,
    playNext: false,
    playPrevious: false,
    pause: false,
    resume: false,
    syncTime: false,
  },
});

function youtubeReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_ROOM_NAME: {
      const socket = state.get('socket');
      if (socket && socket.connected) {
        socket.emit('new user', action.roomName);
      }
      return state;
    }
    case SET_CONNECTED:
      return state.set('isConnected', action.connected);
    case SET_SOCKET:
      return state.set('socket', action.socket);
    case TOGGLE_SIDEBAR:
      return state.set('showSidebar', !state.get('showSidebar'));
    case TOGGLE_SEARCH:
      return state.set('showSearch', !state.get('showSearch'));
    case SET_PLAYER:
      return state.set('player', action.player);
    case SET_YOUTUBE_STATE:
      return state.set('playlist', new List(action.data.playlist));

    case SEND_ADD_VIDEO_ITEM:
      state.get('socket').emit('action', {
        type: 'ADD_VIDEO',
        data: action.data,
      });
      return state;
    case SEND_DELETE_VIDEO_ITEM:
      state.get('socket').emit('action', {
        type: 'DELETE_VIDEO',
        data: action.data,
      });
      return state;
    case SEND_PLAY_YOUTUBE:
      state.get('socket').emit('action', {
        type: 'PLAY',
        data: action.videoId,
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

    case ADD_VIDEO_ITEM:
      return state.set('playlist', state.get('playlist').push(action.data));
    case DELETE_VIDEO_ITEM:
      return state.set('playlist', state.get('playlist').delete(action.index));
    case PLAY_YOUTUBE: {
      const { videoId } = action;
      return state
        .set('videoId', videoId)
        .set('isPlaying', !!videoId);
    }
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
      state.get('player').seekTo(action.time);
      return state.setIn(['isSending', 'syncTime'], false);
    default:
      return state;
  }
}

export default youtubeReducer;
