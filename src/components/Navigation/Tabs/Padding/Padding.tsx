import React from 'react';
import { useAtom } from 'jotai';
import { InputWithUnit } from '../../../Input';
import { paddingAtom } from '../../../../atom';

const PaddingTab = () => {
  const [padding, setPadding] = useAtom(paddingAtom);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /\d*/i;
    const value = (e.target.value.match(regex) || [''])[0];
    setPadding(value);
  };

  return <InputWithUnit value={padding} onChange={onChange} />;
};

export default PaddingTab;
