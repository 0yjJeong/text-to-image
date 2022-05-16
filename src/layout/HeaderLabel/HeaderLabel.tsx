import React, { FC } from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { IconType } from 'react-icons';

type HeaderLabelProps = {
  name?: string;
  url?: string;
  Icon?: IconType;
};

const HeaderLabel: FC<HeaderLabelProps> = ({ name, url, Icon }) => {
  const IconComponent = Icon ?? (() => <AiFillGithub />);

  const githubFragment = name ? (
    <a className='border' target='_blank' href={url}>
      {name}
      <IconComponent />
    </a>
  ) : null;

  const ownerFragment = githubFragment ? (
    <>
      Made by
      {githubFragment}
    </>
  ) : null;

  return (
    <Styles>
      <div className='positioner'>{ownerFragment}</div>
    </Styles>
  );
};

const Styles = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
  background: ${(p) => p.theme.label['background']};
  color: ${(p) => p.theme.label['color']};
  font-weight: ${(p) => p.theme.label['typography'].weight};
  font-size: ${(p) => p.theme.label['typography'].size}px;

  .positioner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    a {
      text-decoration: none;
      outline: none;
      color: inherit;
    }

    .border {
      border: 1.6px solid;
      border-radius: 5px;
      margin-left: 5px;
      padding: 4px 8px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }
  }
`;

export default HeaderLabel;
