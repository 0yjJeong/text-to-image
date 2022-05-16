import React from 'react';
import Header from './layout/Header/Header';
import HeaderLabel from './layout/HeaderLabel/HeaderLabel';
import Page from './layout/Page/Page';
import pkg from '../package.json';

function App() {
  const { name, url } = pkg.author;

  return (
    <Page>
      <Header logo='./thumbnail.png' title='Text to image'>
        <HeaderLabel name={name} url={url} />
      </Header>
      Hello, world!
    </Page>
  );
}

export default App;
