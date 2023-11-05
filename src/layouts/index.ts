import { ReactNode } from 'react';
import empty from './empty';
import simple from './simple';

export interface LayoutProps {
  children: ReactNode;
}

export type TLayout = 'empty' | 'simple';

const LayoutLoader = (name?: TLayout) => {
  switch (name) {
    case 'empty':
      return empty;

    case 'simple':
      return simple;

    default:
      return simple;
  }
};

export default LayoutLoader;
