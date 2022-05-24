import React, { FC } from 'react';
import styled from 'styled-components';

type HeaderProps = {
  title?: string;
  logo?: string;
  children?: React.ReactNode;
};

const Header: FC<HeaderProps> = ({ title, logo, children }) => {
  const logoFragment = (
    <>{logo ? <img src={process.env.PUBLIC_URL + logo} alt='logo' /> : null}</>
  );

  const titleFragment = title ?? null;

  return (
    <Styles>
      <header>
        {logoFragment}
        <span>{titleFragment}</span>
      </header>
      {children}
    </Styles>
  );
};

const Styles = styled.div`
  padding-top: 110px;
  text-align: center;

  img {
    width: 42px;
  }

  span {
    display: block;
    color: ${(p) => p.theme.app['color']};
    font-weight: ${(p) => p.theme.app['typography'].weight};
    font-size: ${(p) => p.theme.app['typography'].size}px;
  }
`;

export default Header;
