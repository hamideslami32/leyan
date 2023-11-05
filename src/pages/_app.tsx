import LayoutLoader, { TLayout } from '@/layouts';
import '@/styles/globals.css';
import { NextPageContext } from 'next';
import type { AppProps } from 'next/app';

interface CustomAppProps extends NextPageContext {
  Component: AppProps['Component'] & {
    layout?: TLayout;
  };
  pageProps: AppProps['pageProps'];
}

export default function App({ Component, pageProps }: CustomAppProps) {
  // const { store, props } = wrapper.useWrappedStore(rest);
  const Layout = LayoutLoader(Component.layout);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
