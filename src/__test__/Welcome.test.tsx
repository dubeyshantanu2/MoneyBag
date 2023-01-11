import React from 'react';
import {render} from '@testing-library/react-native';
import Welcome from '../screens/Welcome';
describe('Welcome Screen', () => {
  test('Test should render Welcome screen correctly', () => {
    const wrapper = render(<Welcome />);
    wrapper.getByTestId('welcome-screen');
  });
});
