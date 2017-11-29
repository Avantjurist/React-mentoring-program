import React from 'react'
import {mount} from 'enzyme';
import {Client} from './Client';

jest.mock('../components/header/Header', () => function MockHeader() {
  return <span />;
});
jest.mock('../components/footer/Footer', () => function MockFooter() {
  return <span />;
});


describe('test', () => {
    it('qwe', () => {
      const wrapper = mount(<Client>132</Client>);
      expect(wrapper.find('MockHeader')).toHaveLength(1)
    });
})
