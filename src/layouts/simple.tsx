import { LayoutProps } from ".";

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/header/Footer";

const simple = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 border border-red-500">{children}</main>
      <Footer />
    </div>
  );
};

export default simple;
