import React, { FC } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './PageProvider';

type PageProps = {
  children?: React.ReactNode;
};

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    background: #1F1F1F;
    color: #ffffff;
  }
`;

const Page: FC<PageProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Page;
