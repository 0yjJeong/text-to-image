import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useOnInit from './useOnInit';

describe('useOnInit', () => {
  it('should be mount', async () => {
    await waitFor(() => {
      expect(renderHook(useOnInit).result.current.mount).toBe(true);
      expect(renderHook(useOnInit).result.current.gradientTheme).toBeDefined();
    });
  });
});
