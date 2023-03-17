import { Random } from 'mockjs';
import React, { useState } from 'react';
import { XDZButton } from 'xdz-component';
import '../../index.less';
export default () => {
  const [name, setName] = useState('');
  const onClick = (): void => {
    setName(Random.first());
  };
  return (
    <div className="flex-around">
      <XDZButton text="common" debounce={500} onClick={onClick} />
      <div className='bg-black'>{name}</div>
    </div>
  );
};
