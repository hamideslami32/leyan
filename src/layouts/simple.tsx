import { LayoutProps } from '.';

import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import MainMenu from '@/components/layout/main-menu/MainMenu';

const simple = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <MainMenu />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
};

export default simple;
