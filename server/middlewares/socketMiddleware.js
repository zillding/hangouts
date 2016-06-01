const List = require('immutable').List;

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

    socket.on('new user', name => {
      room = name.trim() || room;
      socket.join(room);

      if (!rooms[room]) {
        initRoom(room);
      }

      const { playlist, currentPlayingVideoId } = rooms[room];
      socket.emit('welcome', {
        playlist: playlist.toArray(),
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
      let field = 'playlist';
      switch (msg.type) {
        case 'ADD_VIDEO':
          return updateData(room, field, rooms[room][field].push(msg.data));
        case 'DELETE_VIDEO':
          return updateData(room, field, rooms[room][field].delete(msg.data));
        case 'PLAY':
          field = 'currentPlayingVideoId';
          return updateData(room, field, msg.data);
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
