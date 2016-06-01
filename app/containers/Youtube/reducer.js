import { fromJS } from 'immutable';

import {
  SEND_ROOM_NAME,
  SET_CONNECTED,
  SET_SOCKET,
  TOGGLE_SIDEBAR,
  TOGGLE_SEARCH,
  SET_PLAYER,
  SET_YOUTUBE_STATE,
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
      return state.set('playlist', action.data.playlist);
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
      return state.set('videoId', id);
    }
    case PLAY_PREV_VIDEO: {
      const id = getPreviousVideoId(state.get('playlist'), state.get('videoId'));
      return state.set('videoId', id);
    }
    case PAUSE_YOUTUBE:
      return state.set('isPlaying', false);
    case RESUME_YOUTUBE:
      return state.set('isPlaying', true);
    case SYNC_PLAY_TIME:
      return state.get('player').seekTo(action.time);
    default:
      return state;
  }
}

export default youtubeReducer;
