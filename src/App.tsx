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
        <div className='canvas'>
          <Canvas />
        </div>
      </Content>
    </Page>
  );
}

const Content = styled.div`
  display: grid;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;

  .navigations {
    margin-bottom: 40px;
  }

  @media (min-width: 1080px) {
    grid-template-columns: auto 800px;

    .navigations {
      padding-right: 32px;
      border-right: 1px solid ${(p) => p.theme.palette['black1']};
    }

    .canvas {
      margin-left: 32px;
    }
  }
`;

export default App;
