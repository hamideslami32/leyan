import { MutableRefObject } from 'react';
import { useEventListener } from './useEventListener';

function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: MutableRefObject<T | null>,
  // eslint-disable-next-line no-unused-vars
  handler: (event: MouseEvent) => void,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
): void {
  useEventListener(mouseEvent, event => {
    const el = ref?.current;

    if (!el || el.contains(event.target as Node)) return;

    handler(event);
  });
}

export default useClickOutside;
