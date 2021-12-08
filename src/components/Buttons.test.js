/* eslint-disable linebreak-style */
import React from 'react';
import renderer from 'react-test-renderer';
import Buttons from './Buttons';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react'

const  handleClick = jest.fn()

describe('Buttons', () => {
  test('renders Button component', () => {
    const tree = renderer.create(<Buttons />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


// test('calls onClick prop when clicked', () => {
//   const handleClick = jest.fn()
//   render(<Buttons onClick={handleClick}>+</Buttons>)
//   fireEvent.click(screen.getByText('+'))
//   expect(handleClick).toHaveBeenCalledTimes(1)
// })

// describe('simulate user interaction', () => {
 
  test('click button and simulate user interaction', ()=>{
    const buttonName = '+';
    const component = render(<Buttons name={ buttonName } onClick={ handleClick }/>)
    const button = component.getByText('+')
    fireEvent.click(button)
    expect(component.container).toHaveTextContent('+')
  })
// });
