import styled, { CSSProperties } from 'styled-components';

type CanvasOuterProps = {
  background: CSSProperties['background'];
};

const CanvasOuter = styled.div<CanvasOuterProps>`
  border-radius: 20px;
  margin: auto;
  display: flex;
  background: ${(p) => p.background};
  max-width: 800px;
  height: 420px;
  overflow-y: hidden;
  justify-content: center;
`;

export default CanvasOuter;
