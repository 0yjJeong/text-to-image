import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import Page from '../Page/Page';

describe('<Header />', () => {
  it('should render with title', () => {
    const rendered = render(
      <Page>
        <Header title='Title' />
      </Page>
    );
    expect(rendered.getByText('Title')).toBeInTheDocument();
  });

  it('should not have logo', () => {
    const rendered = render(
      <Page>
        <Header title='Title' />
      </Page>
    );
    expect(() => rendered.getByAltText(/logo/i)).toThrowError();
  });

  it('should have logo', () => {
    const rendered = render(
      <Page>
        <Header title='Title' logo={'.'} />
      </Page>
    );
    expect(rendered.getByAltText(/logo/i));
  });
});
