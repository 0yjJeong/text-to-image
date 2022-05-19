import React, { FC } from 'react';
import { GradientTheme } from '../../types';
import { GradientButtonInner, GradientButtonOuter } from './GradientButton';

type GradientListProps = {
  gradient: string;
  gradientTheme: GradientTheme;
  onClick: React.MouseEventHandler;
};

const GradientList: FC<GradientListProps> = ({
  gradient: currentGradient,
  gradientTheme,
  onClick,
}) => {
  return (
    <form data-testid='gradient-form' style={{ display: 'flex' }}>
      {Object.entries(gradientTheme).map(([gradientName, gradient]) => {
        const checked = gradientName === currentGradient;
        return (
          <GradientButtonOuter key={gradientName} gradient={gradient}>
            <GradientButtonInner checked={checked}>
              <input
                type='radio'
                name='gradient'
                id={gradientName}
                defaultChecked={checked}
                value={gradientName}
                onClick={onClick}
              />
            </GradientButtonInner>
          </GradientButtonOuter>
        );
      })}
    </form>
  );
};

export default GradientList;
