import expect from 'expect';

import { SET_ROOM_NAME } from '../constants';
import { setRoomName } from '../actions';

describe('App Actions', () => {
  describe('setRoomName', () => {
    it('should return the correct constant', () => {
      const fixture = 'zill';
      const expectedResult = {
        type: SET_ROOM_NAME,
        payload: fixture,
      };

      expect(setRoomName(fixture)).toEqual(expectedResult);
    });
  });
});
