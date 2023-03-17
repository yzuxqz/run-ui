import { Random } from 'mockjs';
import React, { useState } from 'react';
import { XDZButton } from 'xdz-component';
import '../../index.less';
export default () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const onClick = (): void => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
      setName(Random.first());
    }, 1000);
  };
  return (
    <div className="flex-around">
      <XDZButton text="common" loading={loading} throttle={500} onClick={onClick} />
      <div>{name}</div>
    </div>
  );
};
