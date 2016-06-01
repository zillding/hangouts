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

export function sendRoomName(roomName) {
  return {
    type: SEND_ROOM_NAME,
    roomName,
  };
}

export function setConnected(connected) {
  return {
    type: SET_CONNECTED,
    connected,
  };
}

export function setSocket(socket) {
  return {
    type: SET_SOCKET,
    socket,
  };
}

export function toggleSidebar() {
  return { type: TOGGLE_SIDEBAR };
}

export function toggleSearch() {
  return { type: TOGGLE_SEARCH };
}

export function setPlayer(player) {
  return {
    type: SET_PLAYER,
    player,
  };
}

export function setYoutubeState(data) {
  return {
    type: SET_YOUTUBE_STATE,
    data,
  };
}

export function addVideoItem(data) {
  return {
    type: ADD_VIDEO_ITEM,
    data,
  };
}

export function deleteVideoItem(index) {
  return {
    type: DELETE_VIDEO_ITEM,
    index,
  };
}

export function playYoutube(videoId) {
  return {
    type: PLAY_YOUTUBE,
    videoId,
  };
}

export function playNextVideo() {
  return { type: PLAY_NEXT_VIDEO };
}

export function playPrevVideo() {
  return { type: PLAY_PREV_VIDEO };
}

export function pauseYoutube() {
  return { type: PAUSE_YOUTUBE };
}

export function resumeYoutube() {
  return { type: RESUME_YOUTUBE };
}

export function syncPlayTime(time) {
  return {
    type: SYNC_PLAY_TIME,
    time,
  };
}
