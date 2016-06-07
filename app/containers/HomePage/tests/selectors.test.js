import { fromJS } from 'immutable';
import expect from 'expect';

import { currentAppSelector } from '../selectors';

describe('currentAppSelector', () => {
  it('should select the current app', () => {
    const fixture = 'youtube';
    const homeState = fromJS({ currentApp: fixture });
    const mockedState = fromJS({ home: homeState });

    expect(currentAppSelector(mockedState)).toEqual(fixture);
  });
});
