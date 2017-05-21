import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { HomeApp } from 'containers';
import RootApp from '../index';


describe('<RootApp />', () => {
  it('should render with children', () => {
    const wrapper = shallow(
      <RootApp>
        👶👶👶👶
      </RootApp>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should render with home app children', () => {
    const wrapper = shallow(
      <RootApp>
        <HomeApp>
          👶👶👶👶
        </HomeApp>
      </RootApp>,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
