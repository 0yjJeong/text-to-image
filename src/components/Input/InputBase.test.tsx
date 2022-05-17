import React from 'react';
import { render } from '@testing-library/react';
import InputBase from './InputBase';

describe('<InputBase />', () => {
  it('should render empty value on initial', () => {
    const rendered = render(<InputBase />);
    const element = rendered.container.querySelector('input');
    expect(element).toBeDefined();
    expect(element?.value).toBe('');
  });
});
