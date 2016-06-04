const List = require('immutable').List;

// socket middleware on the server side to handle
// client requests for YouTube app based on socket.io

// action type possible values and corresponding payload data
// 'ADD_VIDEO': [object: video data]
// 'DELETE_VIDEO': [number: index]
// 'PLAY': [string: videoId]
// 'PLAY_NEXT': no data
// 'PLAY_PREVIOUS': no data
// 'PAUSE': no data
// 'RESUME': no data
// 'SYNC_TIME: [number: play time]

/**
 * events received:

'new user': {
  data: [string: roomName]
}

'action': {
  type: [string: one of action type values]
  data: [object|number|string: corresponding payload data]
}

 */

/**
 * events fired:

'welcome': {
  data: {
    playlist: [array: playlist data in current room]
  }
}

'action': {
  type: [string: one of action type values]
  data: [object|number|string: corresponding payload data]
  senderId: [string: socket id of the sender of this action]
}

 */

// Global state data
const rooms = {};

function initRoom(name) {
  rooms[name] = {
    playlist: List(), // eslint-disable-line
    currentPlayingVideoId: '',
  };
}

function deleteRoom(name) {
  delete rooms[name];
}

// mutate the global state
function updateData(room, field, data) {
  rooms[room][field] = data;
}

function setUpSocket(io) {
  io.on('connection', socket => {
    let room = 'default';

    socket.on('new user', ({ data }) => {
      room = data.trim() || room;
      socket.join(room);

      if (!rooms[room]) {
        initRoom(room);
      }

      const { playlist, currentPlayingVideoId } = rooms[room];
      socket.emit('welcome', {
        data: {
          playlist: playlist.toArray(),
        },
      });

      if (currentPlayingVideoId) {
        socket.emit('action', {
          type: 'PLAY',
          data: currentPlayingVideoId,
        });
      }
    });

    socket.on('action', msg => {
      io.in(room).emit('action', msg);

      // store on server
      const { type, data } = msg;
      switch (type) {
        case 'ADD_VIDEO':
          return updateData(room, 'playlist', rooms[room].playlist.push(data));
        case 'DELETE_VIDEO':
          return updateData(room, 'playlist', rooms[room].playlist.delete(data));
        case 'PLAY':
          return updateData(room, 'currentPlayingVideoId', data);
        default:
          return null;
      }
    });

    socket.on('disconnect', () => {
      // clean up the room data if all users left
      const { length = 0 } = io.sockets.adapter.rooms[room] || {};
      if (length === 0) {
        deleteRoom(room);
      }
    });
  });
}

module.exports = setUpSocket;
