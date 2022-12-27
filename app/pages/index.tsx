import type { NextPage } from 'next';
import { getAllData } from '../api/parts/get';
import PageSection from '../components/moleclues/PageSection';
import PageSummary from '../components/moleclues/PageSummary';
import CardCategoryList from '../components/organisms/CardCategoryList';
import HeadSettings from '../components/organisms/HeadSettings';
import { TPartsDatas } from '../types/parts';

const Home: NextPage = () => {
  const datas: TPartsDatas = getAllData();

  return (
    <>
      <HeadSettings title='TOP | UIパーツ集' />
      <PageSummary title='UIパーツ集' description='よくあるパーツをまとめたページとなります' />
      <PageSection title='パーツ種類'>
        <CardCategoryList categoryDatas={datas} />
      </PageSection>
    </>
  );
};

export default Home;
