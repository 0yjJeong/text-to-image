import React from 'react';
import 'jest-canvas-mock';
import { renderHook } from '@testing-library/react-hooks';
import useExport, { exportFactories } from './useExport';

const createDivElementRef = () => {
  const { result } = renderHook(() =>
    React.useRef(document.createElement('div'))
  );
  return result;
};

describe('useExport', () => {
  it('should work well to all formats', async () => {
    // mocks
    jest.spyOn(exportFactories, 'jpeg').mockImplementation(() => '.jpeg');
    jest.spyOn(exportFactories, 'pdf').mockImplementation(() => '.pdf');
    jest.spyOn(exportFactories, 'png').mockImplementation(() => '.png');

    const myRef = createDivElementRef();

    const { result } = renderHook(() => useExport(myRef.current));

    // jpeg
    expect(result.current.exportFile('jpeg')).toMatch(/\.jpeg/);
    expect(exportFactories.jpeg).toHaveBeenCalledTimes(1);
    expect(exportFactories.jpeg).toBeCalledWith(myRef.current);

    // pdf
    expect(result.current.exportFile('pdf')).toMatch(/\.pdf/);
    expect(exportFactories.pdf).toHaveBeenCalledTimes(1);
    expect(exportFactories.pdf).toBeCalledWith(myRef.current);

    // png
    expect(result.current.exportFile('png')).toMatch(/\.png/);
    expect(exportFactories.png).toHaveBeenCalledTimes(1);
    expect(exportFactories.png).toBeCalledWith(myRef.current);
  });
});
