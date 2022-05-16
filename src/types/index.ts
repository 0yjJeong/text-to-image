import { ComponentType } from 'react';

export type Mode = 'light' | 'dark';

export type Padding = number;

export type Text = string;

export type Gradient =
  | 'gradient0'
  | 'gradient1'
  | 'gradient2'
  | 'gradient3'
  | 'gradient4'
  | 'gradient5';

export type NavigationConfig = {
  name: keyof NavigationMap;
  component: ComponentType;
};

export type NavigationMap = {
  /**
   * Type of Display, which is light mode or dark mode.
   */
  mode: Mode;

  /**
   * A space around a box containing text,
   * inside of frame.
   */
  padding: Padding;

  /**
   * A text inside the box.
   */
  text: Text;

  /**
   * A gradient in the back of the box.
   */
  gradient: Gradient;
};
