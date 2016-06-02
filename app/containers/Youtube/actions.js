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

export const sendRoomName = roomName => ({
  type: SEND_ROOM_NAME,
  roomName,
});

export const setConnected = connected => ({
  type: SET_CONNECTED,
  connected,
});

export const setSocket = socket => ({
  type: SET_SOCKET,
  socket,
});

export const toggleSidebar = () => ({ type: TOGGLE_SIDEBAR });

export const toggleSearch = () => ({ type: TOGGLE_SEARCH });

export const setPlayer = player => ({
  type: SET_PLAYER,
  player,
});

export const setYoutubeState = data => ({
  type: SET_YOUTUBE_STATE,
  data,
});

export const sendAddVideoItem = data => ({
  type: SEND_ADD_VIDEO_ITEM,
  data,
});

export const sendDeleteVideoItem = index => ({
  type: SEND_DELETE_VIDEO_ITEM,
  index,
});

export const sendPlayYoutube = videoId => ({
  type: SEND_PLAY_YOUTUBE,
  videoId,
});

export const sendPlayNextVideo = () => ({ type: SEND_PLAY_NEXT_VIDEO });

export const sendPlayPrevVideo = () => ({ type: SEND_PLAY_PREV_VIDEO });

export const sendPauseYoutube = () => ({ type: SEND_PAUSE_YOUTUBE });

export const sendResumeYoutube = () => ({ type: SEND_RESUME_YOUTUBE });

export const sendSyncPlayTime = time => ({
  type: SEND_SYNC_PLAY_TIME,
  time,
});

export const addVideoItem = data => ({
  type: ADD_VIDEO_ITEM,
  data,
});

export const deleteVideoItem = index => ({
  type: DELETE_VIDEO_ITEM,
  index,
});

export const playYoutube = videoId => ({
  type: PLAY_YOUTUBE,
  videoId,
});

export const playNextVideo = () => ({ type: PLAY_NEXT_VIDEO });

export const playPrevVideo = () => ({ type: PLAY_PREV_VIDEO });

export const pauseYoutube = () => ({ type: PAUSE_YOUTUBE });

export const resumeYoutube = () => ({ type: RESUME_YOUTUBE });

export const syncPlayTime = time => ({
  type: SYNC_PLAY_TIME,
  time,
});
