import Head from 'next/head';

type TProps = {
  title: string;
}

const HeadSettings = ({ title }: TProps): JSX.Element => (
  <Head>
    <title>{title}</title>
  </Head>
);

export default HeadSettings;




