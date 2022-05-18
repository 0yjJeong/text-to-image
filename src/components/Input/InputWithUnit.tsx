import React, { FC } from 'react';
import styled from 'styled-components';
import InputBase, { InputBaseProps } from './InputBase';

const Unit = styled.span`
  color: ${(p) => p.theme.palette['black0']};
`;

interface InputWithUnitType extends InputBaseProps {
  unit?: string;
}

const InputWithUnit: FC<InputWithUnitType> = ({ unit = 'px', ...rest }) => {
  return (
    <>
      <InputBase {...rest} />
      <Unit>{unit}</Unit>
    </>
  );
};

export default InputWithUnit;
