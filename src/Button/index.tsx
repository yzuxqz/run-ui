import { useDebounceFn, useThrottleFn } from 'ahooks';
import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button/button';
import React, { FC } from 'react';
interface XDZButtonType extends ButtonProps {
  text: string;
  debounce?: number;
  throttle?: number;
  onClick: () => void;
}
const XDZButton: FC<XDZButtonType> = (props) => {
  const {
    text = '确认',
    onClick,
    debounce = 0,
    throttle = 0,
    ...restProps
  } = props;
  const { run: runDebounce } = useDebounceFn(
    () => {
      typeof onClick === 'function' && onClick();
    },
    {
      wait: debounce,
    },
  );
  const { run: runThrottle } = useThrottleFn(
    () => {
      typeof onClick === 'function' && onClick();
    },
    {
      wait: throttle,
    },
  );
  return (
    <Button {...restProps} onClick={debounce ? runDebounce : runThrottle}>
      {text}
    </Button>
  );
};

export default XDZButton;
