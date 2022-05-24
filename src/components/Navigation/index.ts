import NavigationBuilder from './NavigationBuilder';
import { TextTab, PaddingTab, GradientTab } from './Tabs';

export const createNavigation = () => new NavigationBuilder();

export const defaultNavigation = createNavigation()
  .registerTab({
    name: 'text',
    component: TextTab,
  })
  .registerTab({
    name: 'padding',
    component: PaddingTab,
  })
  .registerTab({
    name: 'gradient',
    component: GradientTab,
  })
  .build();
