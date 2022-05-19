import TextTab from './Text';
import PaddingTab from './Padding';
import GradientTab from './Gradient';
import { NavigationMap } from '../../../types';

type NavigationTabRefs = {
  [key in keyof NavigationMap]: (() => JSX.Element) | null;
};

export default class TabRefs {
  private static readonly tabRefs: NavigationTabRefs = {
    text: TextTab,
    padding: PaddingTab,
    mode: null,
    gradient: GradientTab,
  };

  getTabFactory(name: keyof NavigationMap) {
    const tab = TabRefs.tabRefs[name];
    if (!tab) {
      throw new Error(`TabRef {${tab}} is missing!`);
    }
    return tab;
  }
}
