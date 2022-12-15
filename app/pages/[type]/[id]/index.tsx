import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import PageSummary from '../../../components/moleclues/PageSummary'
import { getPart, getParts } from '../../../api/parts/get'
import { TPart, TPartsData } from '../../../types/parts';
import CardIFrame from '../../../components/atoms/CardIFrame';
import LayoutRelation from '../../../components/atoms/LayoutRelation';
import CardPartsList from '../../../components/organisms/CardPartsList';
import HeadSettings from '../../../components/organisms/HeadSettings';

const ID: NextPage = () => {
  const router = useRouter();
  const { type, id } = router.query;
  const typeText = (typeof type === 'string') ? type : '';
  const idText = (typeof type === 'string') ? id : null;

  // data
  let part: TPart | undefined | null = {
    id: 0,
    name: '',
    name_ja: '',
    codepen_id: '',
  };

  let relationData: TPartsData | undefined | null = {
    id: 0,
    type: '',
    type_ja: '',
    parts: [],
  };

  // データの取得
  part = getPart(typeText, Number(idText));
  relationData = getParts(typeText);

  return (
    <>
      { part && (
        <>
          <HeadSettings title={`${part.name_ja} | UIパーツ集`} />
          <PageSummary title={part.name_ja} />
          <CardIFrame codepenId={part.codepen_id} />
          { relationData && (
            <>
              <LayoutRelation>
                <PageSummary title="■他のスタイル" />
                <CardPartsList PartsType={typeText} PartsDatas={relationData.parts} />
              </LayoutRelation>
            </>
          )}
        </>
      )}
    </>
  )
}

export default ID
