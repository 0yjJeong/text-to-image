import { atom } from 'jotai';
import { Gradient, Mode } from '../types';

export const textAtom = atom('');

export const paddingAtom = atom(0);

export const modeAtom = atom<Mode>('dark');

export const gradient = atom<Gradient>('gradient0');
