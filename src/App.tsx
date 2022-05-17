import React from 'react';
import Header from './layout/Header/Header';
import HeaderLabel from './layout/HeaderLabel/HeaderLabel';
import Page from './layout/Page/Page';
import pkg from '../package.json';
import { defaultNavigation } from './components/Navigation';

function App() {
  const { name, url } = pkg.author;

  return (
    <Page>
      <Header logo='./thumbnail.png' title='Text to image'>
        <HeaderLabel name={name} url={url} />
      </Header>
      {defaultNavigation}
    </Page>
  );
}

export default App;
