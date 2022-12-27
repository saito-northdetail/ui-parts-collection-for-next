import type { AppProps } from 'next/app';
import DefaultLayout from '../layouts/default';
import 'modern-css-reset/dist/reset.min.css';
import '../styles/common/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
