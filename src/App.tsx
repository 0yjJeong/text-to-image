import React from 'react';
import Header from './layout/Header/Header';
import HeaderLabel from './layout/HeaderLabel/HeaderLabel';
import Page from './layout/Page/Page';
import pkg from '../package.json';
import { createNavigation } from './components/Navigation';

function TextTab() {
  return <>This is text tab.</>;
}

function PaddingTab() {
  return <>This is padding tab.</>;
}

const navigation = createNavigation()
  .registerTab({
    name: 'text',
    component: TextTab,
  })
  .registerTab({
    name: 'padding',
    component: PaddingTab,
  })
  .build();

function App() {
  const { name, url } = pkg.author;

  return (
    <Page>
      <Header logo='./thumbnail.png' title='Text to image'>
        <HeaderLabel name={name} url={url} />
      </Header>
      Hello, world!
      {navigation}
    </Page>
  );
}

export default App;
