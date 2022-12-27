import styles from '../../styles/organisms/CardCategoryList.module.scss';
import { TPartsDatas, TPartsData } from '../../types/parts';
import CardCategory from '../moleclues/CardCategory';

type TProps = {
  categoryDatas: TPartsDatas;
};

const CardCategoryList = ({ categoryDatas }: TProps) => (
  <div className={styles.c_list}>
    {categoryDatas.map((categoryData: TPartsData) => (
      <CardCategory
        key={categoryData.id}
        to={`./${categoryData.type}/`}
        text={categoryData.type_ja}
      />
    ))}
  </div>
);

export default CardCategoryList;
