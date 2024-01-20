import { LayoutProps } from '.';

const Empty = (props: LayoutProps) => {
  const { children } = props;
  return <main>{children}</main>;
};

export default Empty;
