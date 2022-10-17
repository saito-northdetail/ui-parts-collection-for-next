import LayoutCard from '../atoms/LayoutCard';
import CardLink from '../atoms/CardLink';
import CardTitleText from '../atoms/CardTitleText';

type TProps = {
  to: string;
  text: string;
}

const CardCategory = ({to, text}: TProps) => (
  <LayoutCard>
    <CardLink to={to}>
      <CardTitleText text={text} />
    </CardLink>
  </LayoutCard>
)

export default CardCategory;
