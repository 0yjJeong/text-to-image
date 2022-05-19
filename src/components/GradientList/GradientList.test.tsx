import React from 'react';
import { render } from '@testing-library/react';
import GradientList from './GradientList';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

const fn = jest.fn();

describe('<GradientList />', () => {
  const gradientTheme3 = {
    gradient0: '',
    gradient1: '',
    gradient2: '',
  };

  const gradientTheme6 = {
    ...gradientTheme3,
    gradient3: '',
    gradient4: '',
    gradient5: '',
  };

  it('should show 3 gradients', async () => {
    const rendered = render(
      <GradientList
        gradient='gradient0'
        gradientTheme={gradientTheme3}
        onClick={fn}
      />
    );
    expect(rendered.getAllByRole('radio', { hidden: true })).toHaveLength(3);
  });

  it('should show 6 gradients', async () => {
    const rendered = render(
      <GradientList
        gradient='gradient0'
        gradientTheme={gradientTheme6}
        onClick={fn}
      />
    );
    expect(rendered.getAllByRole('radio', { hidden: true })).toHaveLength(6);
  });

  it('should check', async () => {
    const rendered = render(
      <GradientList
        gradient='gradient0'
        gradientTheme={gradientTheme6}
        onClick={fn}
      />
    );
    const radio0 = rendered.container.querySelector('#gradient0');
    expect(radio0).toBeDefined();

    expect(fn).toBeCalledTimes(0);
    expect(rendered.getByTestId('gradient-form')).toHaveFormValues({
      gradient: 'gradient0',
    });

    const radio1 = rendered.container.querySelector('#gradient1');
    expect(radio1).toBeDefined();

    await act(async () => userEvent.click(radio1!));

    expect(fn).toBeCalledTimes(1);
    expect(rendered.getByTestId('gradient-form')).toHaveFormValues({
      gradient: 'gradient1',
    });
  });
});
