import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaFileExport } from 'react-icons/fa';
import { chain } from 'lodash';
import styled from 'styled-components';
import useExport, { ExportFormatArr } from '../../hooks/useExport';
import { useAtom } from 'jotai';
import { componentToPrintAtom } from '../../atom';

const exportFormatArr: ExportFormatArr = ['jpeg', 'pdf', 'png'];

const ExportButton = () => {
  const [closed, setClosed] = React.useState(true);
  const [componentToPrint] = useAtom(componentToPrintAtom);
  const { exportFile } = useExport(componentToPrint);

  const dropdownMenu = chain(exportFormatArr)
    .map((format) => (
      <li key={format} onClick={() => exportFile(format)}>
        {format.toUpperCase()}
      </li>
    ))
    .value();

  return (
    <ExportButtonBlock closed={closed}>
      <ul>{dropdownMenu}</ul>
      <label htmlFor='dropbox-button'>
        <FaFileExport />
        <span className='dropbox-text'>Export</span>
        <span className='arrow-icon'>
          <MdKeyboardArrowDown />
        </span>
      </label>
      <input
        type='checkbox'
        id='dropbox-button'
        hidden
        onClick={() => setClosed(!closed)}
      />
    </ExportButtonBlock>
  );
};

const ExportButtonBlock = styled.div<{ closed: boolean }>`
  max-width: 240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-end;

  label {
    cursor: pointer;
    border-radius: 10px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    background: ${(p) => p.theme.palette['black3']};
    border: 2px solid ${(p) => p.theme.palette['black1']};
    padding: 22px 20px;

    .dropbox-text {
      flex: 1;
      padding-left: 20px;
      user-select: none;
    }

    .arrow-icon {
      display: inherit;
      transform: ${(p) => (p.closed ? 'rotateZ(-180deg)' : 'rotateZ(0deg)')};
      transition: all ease-in 0.26s;
    }
  }

  ul {
    list-style: none;

    background: ${(p) => p.theme.palette['black3']};
    border: 2px solid ${(p) => p.theme.palette['black1']};
    border-radius: 10px;
    padding: 22px 20px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 54px;

    & > li {
      display: flex;
      justify-content: center;
      padding-top: 11px;
      padding-bottom: 11px;
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        background: ${(p) => p.theme.palette['black2']};
      }
    }

    transition: all ease-in 0.26s;
    ${(p) =>
      p.closed
        ? `
    visibility: hidden;
    opacity: 0;
    `
        : `
    visibility: visible;
    opacity: 1;
    `}
  }
`;

export default ExportButton;
