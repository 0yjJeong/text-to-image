import { RefObject, ReactInstance } from 'react';
import { atom } from 'jotai';
import { Gradient, GradientTheme, Mode } from '../types';

export const textAtom = atom('');

export const paddingAtom = atom('24');

export const modeAtomAtom = atom<Mode>('dark');

export const gradientAtom = atom<Gradient>('gradient0');

export const gradientThemeAtom = atom<GradientTheme>({
  gradient0: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
  gradient1: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
  gradient2:
    'radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)',
  gradient3: 'linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)',
  gradient4: 'linear-gradient(to top, #c471f5 0%, #fa71cd 100%)',
  gradient5:
    'linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)',
});

export const gradientThemeToCssAtom = atom((get) => {
  const gradientTheme = get(gradientThemeAtom);

  const gradientCSS = gradientTheme[get(gradientAtom)];
  if (!gradientCSS) {
    throw new Error(`No style available for ${gradientAtom}`);
  }

  return gradientCSS;
});

export const componentToPrintAtom = atom<RefObject<HTMLDivElement> | null>(
  null
);
