import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'jotai';
import Canvas from './Canvas';
import { textAtom } from '../../atom';

describe('<Canvas />', () => {
  it('should render text', () => {
    const rendered = render(
      <Provider initialValues={[[textAtom, 'abc']]}>
        <Canvas />
      </Provider>
    );
    expect(rendered.getByText('abc'));
  });
});
