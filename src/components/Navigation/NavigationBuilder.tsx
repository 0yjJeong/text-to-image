import React, { FC } from 'react';
import styled from 'styled-components';
import { NavigationConfig } from '../../types';

const Tab = styled.div`
  & + & {
    padding-top: 1rem;
  }

  .name {
    padding-bottom: 0.8rem;
    color: ${(p) => p.theme['tab']['color']};
    font-weight: ${(p) => p.theme['tab'].typography['weight']};
    font-size: ${(p) => p.theme['tab'].typography['size']}px;
  }

  .content {
    display: flex;
    padding: 10px;
    background: ${(p) => p.theme.palette['black3']};
  }
`;

type TabProps = {
  name: string;
  children: React.ReactNode;
};

const builtComponent: FC<TabProps> = ({ name, children }) => {
  return (
    <Tab key={name}>
      <div className='name'>{name}</div>
      <div className='content'>{children}</div>
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

      builtNavigation.push(
        builtComponent({
          name: [name[0].toUpperCase(), ...name.slice(1)].join(''),
          children,
        })
      );
    }

    return builtNavigation;
  }
}
