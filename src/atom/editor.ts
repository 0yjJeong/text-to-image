import { atom } from 'jotai';
import { Gradient, GradientTheme, Mode } from '../types';

export const textAtom = atom('');

export const paddingAtom = atom('');

export const modeAtomAtom = atom<Mode>('dark');

export const gradientAtom = atom<Gradient>('gradient0');

export const gradientThemeAtom = atom<GradientTheme | null>(null);

export const gradientThemeToCssAtom = atom((get) => {
  const gradientTheme = get(gradientThemeAtom);
  if (!gradientTheme) {
    throw new Error('No gradient theme is available');
  }

  const gradientCSS = gradientTheme[get(gradientAtom)];
  if (!gradientCSS) {
    throw new Error(`No style available for ${gradientAtom}`);
  }

  return gradientCSS;
});
