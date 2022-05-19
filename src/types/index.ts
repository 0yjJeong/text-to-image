import { CSSProperties } from 'styled-components';

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

/**
 * Map of gradient name and color.
 */
export type GradientTheme = Partial<{
  [key in Gradient]: string;
}>;

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
