import styled from 'styled-components';

type GradientButtonOuterProps = {
  gradient: string;
};

export const GradientButtonOuter = styled.div<GradientButtonOuterProps>`
  position: relative;
  width: 24px;
  margin-right: 8px;

  &::after {
    display: block;
    content: '';
    padding-bottom: 100%;
    border-radius: 50%;
    background: ${(p) => p.gradient};
  }
`;

type GradientButtonInnerProps = {
  checked: boolean;
};

export const GradientButtonInner = styled.label<GradientButtonInnerProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  border-radius: 50%;
  cursor: pointer;

  ${(p) =>
    p.checked &&
    `
  border: 1.6px solid #4aaeff;
  `}

  & > input {
    display: none;
  }
`;
