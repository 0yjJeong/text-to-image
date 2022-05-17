import React, { FC } from 'react';
import styled from 'styled-components';
import { writableCommon } from '../style';

const TextareaBlock = styled.textarea`
  ${writableCommon}
  height: 140px;
  resize: none;
`;

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: FC<TextareaProps> = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ ...rest }, ref) => {
  return <TextareaBlock id='textarea' ref={ref} {...rest} />;
});

export default Textarea;
