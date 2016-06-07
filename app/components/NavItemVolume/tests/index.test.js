import expect from 'expect';
import { mount } from 'enzyme';
import React from 'react';

import NavItemVolume from '../index';

describe('<NavItemVolume />', () => {
  it('should render 1 span', () => {
    const renderedComponent = mount(
      <NavItemVolume value={4} />
    );
    expect(renderedComponent.find('span').length).toEqual(1);
  });

  it('should render 4 span', () => {
    const renderedComponent = mount(
      <NavItemVolume value={13} />
    );
    expect(renderedComponent.find('span').length).toEqual(4);
  });
});
