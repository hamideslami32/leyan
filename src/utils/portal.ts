import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import useMounted from './hooks/useMounted';

interface PortalProps {
  children?: ReactNode;
  destination: string;
}

const Portal = (props: PortalProps) => {
  const { children, destination } = props;

  const isMounted = useMounted();
  if (!isMounted) return null;

  const selectedElement = document.getElementById(destination);
  if (!selectedElement) return null;

  return createPortal(children, selectedElement);
};

export default Portal;
