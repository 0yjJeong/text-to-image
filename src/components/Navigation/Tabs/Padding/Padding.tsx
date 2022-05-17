import React from 'react';
import { useAtom } from 'jotai';
import { InputWithUnit } from '../../../Input';
import { paddingAtom } from '../../../../atom';

const PaddingTab = () => {
  const [padding, setPadding] = useAtom(paddingAtom);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPadding(parseInt(e.target.value, 10));
  };

  return <InputWithUnit value={padding} onChange={onChange} />;
};

export default PaddingTab;
