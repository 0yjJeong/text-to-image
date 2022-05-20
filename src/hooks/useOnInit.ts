import { useState, useEffect, useRef } from 'react';
import { useAtom } from 'jotai';
import { GradientTheme } from '../types';
import { componentToPrintAtom, gradientThemeAtom } from '../atom';

export default function useOnInit(theme?: GradientTheme) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [mount, setMount] = useState(false);
  const [gradientTheme, setGradientTheme] = useAtom(gradientThemeAtom);
  const [componentToPrint, setComponentToPrint] = useAtom(componentToPrintAtom);

  useEffect(() => {
    setGradientTheme(theme ?? gradientTheme);
    setMount(true);
  }, [theme, setGradientTheme]);

  useEffect(() => {
    if (componentToPrint === null) {
      setComponentToPrint(canvasRef);
    }
  }, [componentToPrint, setComponentToPrint, canvasRef]);

  return { gradientTheme, mount, canvasRef };
}
