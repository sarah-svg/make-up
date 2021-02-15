import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import TrafficLights from './components/app/TrafficLight';

describe('Page All Artists ', () => {
  afterEach(() => cleanup());

  it('displays all of the artist', () => {
    render(<TrafficLights/>);
    const ul = screen.getByText('Light');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
  it('renders App', () => {
    const { asFragment } = render(<TrafficLights />);
    expect(asFragment()).toMatchSnapshot();
  });

});
