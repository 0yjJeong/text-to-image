import styled, { CSSProperties } from 'styled-components';

type CanvasOuterProps = {
  background: CSSProperties['background'];
};

const CanvasOuter = styled.div<CanvasOuterProps>`
  flex: 800px;
  border-radius: 20px;
  display: flex;
  background: ${(p) => p.background};
  height: 420px;
  overflow-y: hidden;
  max-width: 800px;
  justify-content: center;
  margin-left: 10px;
`;

export default CanvasOuter;
