/* eslint-disable linebreak-style */
import React from 'react';
import renderer from 'react-test-renderer';
import Buttons from './Buttons';

describe('Buttons', () => {
  test('renders Button component', () => {
    const tree = renderer.create(<Buttons />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
