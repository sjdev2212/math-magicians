/* eslint-disable linebreak-style */
import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home', () => {
  test('renders Home component', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
