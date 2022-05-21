import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ExportButton from './ExportButton';
import Page from '../../layout/Page';

describe('<ExportButton />', () => {
  it('should render', () => {
    const rendered = render(
      <Page>
        <ExportButton />
      </Page>
    );
    expect(rendered.getByText('Export'));

    const input = rendered.container.querySelector('input');
    expect(input).toBeDefined();
    expect(input).not.toBeChecked();

    fireEvent.click(input!);

    expect(input).toBeChecked();
  });
});
