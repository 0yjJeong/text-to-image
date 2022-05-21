import React from 'react';
import Header from './layout/Header/Header';
import HeaderLabel from './layout/HeaderLabel/HeaderLabel';
import Page from './layout/Page/Page';
import pkg from '../package.json';
import { defaultNavigation } from './components/Navigation';
import Canvas from './components/Canvas/Canvas';
import styled from 'styled-components';
import useOnInit from './hooks/useOnInit';
import ExportButton from './components/ExportButton';

function App() {
  const { name, url } = pkg.author;
  const { mount, canvasRef } = useOnInit();

  if (!mount) return null;

  return (
    <Page>
      <Header logo='./thumbnail.png' title='Text to image'>
        <HeaderLabel name={name} url={url} />
      </Header>
      <Content>
        <div className='left'>{defaultNavigation}</div>
        <div className='right'>
          <Canvas ref={canvasRef} />
          <div
            style={{
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <ExportButton />
          </div>
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

  .left {
    margin-bottom: 40px;
  }

  @media (min-width: 1080px) {
    grid-template-columns: auto 800px;

    .left {
      padding-right: 32px;
      border-right: 1px solid ${(p) => p.theme.palette['black1']};
    }

    .right {
      margin-left: 32px;
    }
  }
`;

export default App;
