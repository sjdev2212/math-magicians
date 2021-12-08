import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

describe('Calculator', () => {
  test('renders Calc component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
