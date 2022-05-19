import React from 'react';
import { useAtom } from 'jotai';
import GradientButtonList from '../../../GradientList/GradientList';
import { gradientAtom, gradientThemeAtom } from '../../../../atom';
import { Gradient } from '../../../../types';

const GradientTab = () => {
  const [gradient, setGradient] = useAtom(gradientAtom);
  const [gradientTheme] = useAtom(gradientThemeAtom);

  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const id = (e.target as any).id;
    if (id) {
      setGradient(id as Gradient);
    }
  };

  return (
    <GradientButtonList
      gradient={gradient}
      gradientTheme={gradientTheme}
      onClick={onClick}
    />
  );
};

export default GradientTab;
