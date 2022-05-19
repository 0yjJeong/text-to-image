import styled from 'styled-components';

type CanvasInnerProps = {
  padding: number;
};

const CanvasInner = styled.div<CanvasInnerProps>`
  align-self: center;
  background: rgba(0, 0, 0, 0.7);
  font-size: 1.2rem;
  padding: ${(p) => p.padding}px;
  border-radius: 10px;
  white-space: pre-wrap;
  box-shadow: 0 10px 20px 5px rgb(0 0 0 / 16%);
`;

export default CanvasInner;
