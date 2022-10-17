import type { NextPage } from 'next'
import PageSummary from '../components/moleclues/PageSummary'
import PageSection from '../components/moleclues/PageSection'
import CardCategoryList from '../components/organisms/CardCategoryList'
import { getAllData } from '../api/parts/get'
import { TPartsDatas } from '../types/parts'


const Home: NextPage = () => {
  const datas: TPartsDatas = getAllData();

  return (
    <>
      <PageSummary
        title="UIパーツ集"
        description="よくあるパーツをまとめたページとなります"
      />
      <PageSection title="パーツ種類">
        <CardCategoryList categoryDatas={datas} />
      </PageSection>
    </>
  )
}

export default Home
