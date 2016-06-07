import expect from 'expect';

import reducer from '../reducer';
import { setRoomName } from '../actions';

describe('App Reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {}).toJS())
      .toInclude({ roomName: '' })
      .toIncludeKey('webrtc');
  });

  it('handles the setRoomName action', () => {
    const fixture = 'zill';

    expect(reducer(undefined, setRoomName(fixture)).toJS())
      .toInclude({ roomName: fixture })
      .toIncludeKey('webrtc');
  });
});
