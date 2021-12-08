/* eslint-disable linebreak-style */
import React from 'react';
import { render } from '@testing-library/react';

import Calculator from './Calculator';

describe('Calculator', () => {
  test('renders App component', () => {
    render(<Calculator />);
  });
});
