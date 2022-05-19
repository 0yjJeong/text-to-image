import React from 'react';
import { useAtom } from 'jotai';
import { gradientThemeToCssAtom, paddingAtom, textAtom } from '../../atom';
import CanvasInner from './CanvasInner';
import CanvasOuter from './CanvasOuter';

const Canvas = React.forwardRef<HTMLDivElement>(({}, ref) => {
  const [text] = useAtom(textAtom);
  const [padding] = useAtom(paddingAtom);
  const [gradientCss] = useAtom(gradientThemeToCssAtom);

  const textFragment = text ? (
    <CanvasInner padding={parseInt(padding)}>{text}</CanvasInner>
  ) : null;

  return (
    <CanvasOuter ref={ref} background={gradientCss}>
      {textFragment}
    </CanvasOuter>
  );
});

export default Canvas;
