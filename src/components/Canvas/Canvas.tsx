import React from 'react';
import { useAtom } from 'jotai';
import { paddingAtom, textAtom } from '../../atom';
import CanvasInner from './CanvasInner';
import CanvasOuter from './CanvasOuter';

const Canvas = React.forwardRef<HTMLDivElement>(({}, ref) => {
  const [text] = useAtom(textAtom);
  const [padding] = useAtom(paddingAtom);

  const textFragment = text ? (
    <CanvasInner padding={padding}>{text}</CanvasInner>
  ) : null;

  return <CanvasOuter ref={ref}>{textFragment}</CanvasOuter>;
});

export default Canvas;
