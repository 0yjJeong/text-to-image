import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { GradientTheme } from '../types';
import { gradientThemeAtom } from '../atom';

export default function useOnInit(theme?: GradientTheme) {
  const [mount, setMount] = useState(false);
  const [gradientTheme, setGradientTheme] = useAtom(gradientThemeAtom);

  useEffect(() => {
    setGradientTheme(theme ?? gradientTheme);
    setMount(true);
  }, [theme, setGradientTheme]);

  return { gradientTheme, mount };
}
