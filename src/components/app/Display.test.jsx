

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from './Display';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<Display />);
    expect(asFragment()).toMatchSnapshot();
  });
});
