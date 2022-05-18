import { atom } from 'jotai';
import { Gradient, Mode } from '../types';

export const textAtom = atom('');

export const paddingAtom = atom('');

export const modeAtomAtom = atom<Mode>('dark');

export const gradientAtom = atom<Gradient>('gradient0');
