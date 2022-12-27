import { ReactNode } from 'react';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

type TChildren = {
  children?: ReactNode;
};

const DefaultLayout = ({ children }: TChildren) => (
  <main className='l_main'>
    <Header />
    <div className='inner'>{children}</div>
    <Footer />
  </main>
);

export default DefaultLayout;
