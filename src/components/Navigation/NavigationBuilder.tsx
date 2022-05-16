import React, { FC } from 'react';
import styled from 'styled-components';
import { NavigationConfig } from '../../types';

const Tab = styled.label``;

type TabProps = {
  name: string;
  children: React.ReactNode;
};

const builtComponent: FC<TabProps> = ({ name, children }) => {
  return (
    <Tab key={name}>
      <div className='name'>{name}</div>
      <div>{children}</div>
    </Tab>
  );
};

export default class NavigationBuilder {
  private readonly tabs = new Map<string, NavigationConfig>();

  registerTab(config: NavigationConfig) {
    if (this.tabs.has(config.name)) {
      throw new Error(`Tab {${config.name}} is already registered`);
    }
    this.tabs.set(config.name, config);
    return this;
  }

  build() {
    const builtNavigation = [];

    for (const { name, component: Component } of this.tabs.values()) {
      const children = <Component />;

      builtNavigation.push(builtComponent({ name, children }));
    }

    return builtNavigation;
  }
}
