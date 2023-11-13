import { LayoutProps } from '.';

import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import MainMenu from '@/components/layout/main-menu/MainMenu';

const simple = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className='flex min-h-screen flex-col'>
      <div style={{ boxShadow: '0px 4px 80px 0px #8484841F' }}>
        <Header />
        <MainMenu />
      </div>
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
};

export default simple;
