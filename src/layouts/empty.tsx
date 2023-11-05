import { LayoutProps } from '.';

const empty = (props: LayoutProps) => {
  const { children } = props;
  return <main>{children}</main>;
};

export default empty;
