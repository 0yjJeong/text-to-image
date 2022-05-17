import React from 'react';
import { render } from '@testing-library/react';
import Textarea from './Textarea';

describe('<Textarea />', () => {
  it('should render empty value on initial', () => {
    const rendered = render(<Textarea />);
    const textarea = rendered.container.querySelector('textarea');
    expect(textarea).toBeDefined();
    expect(textarea?.value).toBe('');
  });
});
