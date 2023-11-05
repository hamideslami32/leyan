import { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';

const debounce = <Params extends any[]>(
  fn: (...args: Params) => any,
  delay: number = 300,
  // immediate: boolean = false
): ((...args: Params) => void) => {
  let timer: TimeoutId;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

export default debounce;
