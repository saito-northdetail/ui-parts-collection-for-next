import type { NextPage } from 'next'
import PageSummary from '../../components/moleclues/PageSummary'
import CardPartsList from '../../components/organisms/CardPartsList'
import { getParts } from '../../api/parts/get'
import { TPartsData } from '../../types/parts'
import { useRouter } from 'next/router'
import HeadSettings from '../../components/organisms/HeadSettings'

const Parts: NextPage = () => {
  const router = useRouter();
  const { type } = router.query;
  const typeText = (typeof type === 'string') ? type : 'part';
  const partsData: TPartsData | undefined | null = getParts(typeText);
  const typeTextJa =  partsData?.type_ja ?? 'パーツ名';
  const headTitle = `カテゴリ「${typeTextJa}」 | UIパーツ集`;
  
  return (
    <>
       { !!partsData && 
          <>
            <HeadSettings title={headTitle} />
            <PageSummary title={partsData.type_ja} />
            <CardPartsList PartsType={typeText} PartsDatas={partsData.parts} />
          </>
       }
    </>
  )
}

export default Parts
