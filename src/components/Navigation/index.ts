import NavigationBuilder from './NavigationBuilder';
import { TabRefs } from './Tabs';

export const createTabRefs = () => new TabRefs();

export const createNavigation = () => new NavigationBuilder();

const tabRefs = createTabRefs();

export const defaultNavigation = createNavigation()
  .registerTab({
    name: 'text',
    component: tabRefs.getTabFactory('text'),
  })
  .registerTab({
    name: 'padding',
    component: tabRefs.getTabFactory('padding'),
  })
  .build();
