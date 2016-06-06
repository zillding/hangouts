import { createAction } from 'redux-actions';

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

export const showNotification = createAction(SHOW_NOTIFICATION);

export const closeNotification = createAction(CLOSE_NOTIFICATION);

export const sendRoomName = createAction(SEND_ROOM_NAME);

export const setConnected = createAction(SET_CONNECTED);

export const setSocket = createAction(SET_SOCKET);

export const toggleSidebar = createAction(TOGGLE_SIDEBAR);

export const toggleSearch = createAction(TOGGLE_SEARCH);

export const setPlayer = createAction(SET_PLAYER);

export const setYoutubeState = createAction(SET_YOUTUBE_STATE);

export const sendAddVideoItem = createAction(SEND_ADD_VIDEO_ITEM);

export const sendDeleteVideoItem = createAction(SEND_DELETE_VIDEO_ITEM);

export const sendPlayYoutube = createAction(SEND_PLAY_YOUTUBE);

export const sendPlayNextVideo = createAction(SEND_PLAY_NEXT_VIDEO);

export const sendPlayPrevVideo = createAction(SEND_PLAY_PREV_VIDEO);

export const sendPauseYoutube = createAction(SEND_PAUSE_YOUTUBE);

export const sendResumeYoutube = createAction(SEND_RESUME_YOUTUBE);

export const sendSyncPlayTime = createAction(SEND_SYNC_PLAY_TIME);

export const addVideoItem = createAction(ADD_VIDEO_ITEM);

export const deleteVideoItem = createAction(DELETE_VIDEO_ITEM);

export const playYoutube = createAction(PLAY_YOUTUBE);

export const playNextVideo = createAction(PLAY_NEXT_VIDEO);

export const playPrevVideo = createAction(PLAY_PREV_VIDEO);

export const pauseYoutube = createAction(PAUSE_YOUTUBE);

export const resumeYoutube = createAction(RESUME_YOUTUBE);

export const syncPlayTime = createAction(SYNC_PLAY_TIME);

export default dispatch => ({
  dispatch,
  closeSnackbar: () => dispatch(closeNotification()),
});
