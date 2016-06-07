import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { YoutubePlaylistItem } from '../index';
import ListItem from 'components/ListItem';

describe('<YoutubePlaylistItem />', () => {
  const data = { id: { videoId: 'video-abcde' } };
  const disableControl = false;
  const index = 2;
  const isCurrentPlayingItem = false;
  const onSelect = () => null;
  const onDelete = () => null;
  let item;

  beforeEach(() => {
    item = (
      <YoutubePlaylistItem
        data={data}
        disableControl={disableControl}
        index={index}
        isCurrentPlayingItem={isCurrentPlayingItem}
        onSelect={onSelect}
        onDelete={onDelete}
      />
    );
  });

  it('should render a ListItem', () => {
    const renderedComponent = shallow(item);
    expect(renderedComponent.find(ListItem).length).toEqual(1);
  });
});
