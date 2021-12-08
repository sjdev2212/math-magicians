import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from './Quote';

describe('Quotes', () => {
  test('renders quote component', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
