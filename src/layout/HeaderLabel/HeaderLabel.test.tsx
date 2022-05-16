import React from 'react';
import { render } from '@testing-library/react';
import HeaderLabel from './HeaderLabel';
import Page from '../Page/Page';

describe('<HeaderLabel />', () => {
  it('should not render', () => {
    const rendered = render(
      <Page>
        <HeaderLabel />
      </Page>
    );
    expect(() => rendered.getByText(/Made by/i)).toThrowError();
    expect(() => rendered.getByText('a')).toThrowError();
  });

  it('should render', () => {
    const rendered = render(
      <Page>
        <HeaderLabel name='a' />
      </Page>
    );
    expect(rendered.getByText(/Made by/i));
    expect(rendered.getByText('a'));
    expect(rendered.container.querySelector('svg')).toBeDefined();
  });
});
