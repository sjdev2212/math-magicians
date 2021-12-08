import React from 'react';
import renderer from 'react-test-renderer';

import Buttons from './Buttons';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

const handleClick = jest.fn();

describe('Buttons', () => {
  test('renders Button component', () => {
    const tree = renderer.create(<Buttons />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test('click button and simulate user interaction', () => {
  const buttonName = '+';
  const component = render(<Buttons name={buttonName} onClick={handleClick} />);
  const button = component.getByText('+');
  fireEvent.click(button);
  expect(component.container).toHaveTextContent('+');
});

test('click button and simulate user interaction', () => {
  const buttonName = '-';
  const component = render(<Buttons name={buttonName} onClick={handleClick} />);
  const button = component.getByText('-');
  fireEvent.click(button);
  expect(component.container).toHaveTextContent('-');
});

test('click button and simulate user interaction', () => {
  const buttonName = '3';
  const component = render(<Buttons name={buttonName} onClick={handleClick} />);
  const button = component.getByText('3');
  fireEvent.click(button);
  expect(component.container).toHaveTextContent('3');
});

test('click button and simulate user interaction', () => {
  const buttonName = '2';
  const component = render(<Buttons name={buttonName} onClick={handleClick} />);
  const button = component.getByText('2');
  fireEvent.click(button);
  expect(component.container).toHaveTextContent('2');
});
