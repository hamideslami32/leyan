import { LayoutProps } from ".";

const simple = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default simple;
