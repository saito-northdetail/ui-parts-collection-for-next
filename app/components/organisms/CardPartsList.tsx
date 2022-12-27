import styles from '../../styles/organisms/CardPartsList.module.scss';
import { TParts, TPart } from '../../types/parts';
import CardParts from '../moleclues/CardParts';

type TProps = {
  PartsType: String;
  PartsDatas: TParts | undefined | null;
};

const CardPartsList = ({ PartsType, PartsDatas }: TProps) => (
  <div className={styles.c_list}>
    {PartsDatas &&
      PartsDatas.map((PartsData: TPart) => (
        <CardParts
          key={PartsData.id}
          to={`/${PartsType}/${PartsData.id}/`}
          text={PartsData.name_ja}
        />
      ))}
  </div>
);

export default CardPartsList;
