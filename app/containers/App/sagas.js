import io from 'socket.io-client';

export default [
  setUpSocket,
];

export function* setUpSocket() {
  const socket = io();
  console.log(socket);
}
