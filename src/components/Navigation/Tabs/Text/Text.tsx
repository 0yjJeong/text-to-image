import React from 'react';
import { useAtom } from 'jotai';
import { textAtom } from '../../../../atom';
import Textarea from '../../../Textarea';

const TextTab = () => {
  const [text, setText] = useAtom(textAtom);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <Textarea
      placeholder='Please enter text.'
      value={text}
      onChange={onChange}
    />
  );
};

export default TextTab;
