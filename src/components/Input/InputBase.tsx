import React from 'react';
import styled from 'styled-components';
import { writableCommon } from '../style';

const Styles = styled.input`
  ${writableCommon};
`;

export interface InputBaseProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  ({ ...rest }, ref) => {
    return <Styles ref={ref} {...rest} />;
  }
);

export default InputBase;
