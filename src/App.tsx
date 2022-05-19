import React from 'react';
import Header from './layout/Header/Header';
import HeaderLabel from './layout/HeaderLabel/HeaderLabel';
import Page from './layout/Page/Page';
import pkg from '../package.json';
import { defaultNavigation } from './components/Navigation';
import Canvas from './components/Canvas/Canvas';
import styled from 'styled-components';
import useOnInit from './hooks/useOnInit';

function App() {
  const { name, url } = pkg.author;
  const { mount } = useOnInit();

  if (!mount) return null;

  return (
    <Page>
      <Header logo='./thumbnail.png' title='Text to image'>
        <HeaderLabel name={name} url={url} />
      </Header>
      <Content>
        <div className='navigations'>{defaultNavigation}</div>
        <Canvas />
      </Content>
    </Page>
  );
}

const Content = styled.div`
  display: flex;
  margin-top: 100px;

  .navigations {
    flex: 1;
    padding-right: 10px;
    border-right: 2px solid ${(p) => p.theme.palette['black1']};
  }
`;

export default App;
