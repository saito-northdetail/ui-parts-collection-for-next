import CardLink from '../atoms/CardLink';
import CardTitleText from '../atoms/CardTitleText';
import LayoutCard from '../atoms/LayoutCard';

type TProps = {
  to: string;
  text: string;
};

const CardParts = ({ to, text }: TProps) => (
  <LayoutCard>
    <CardLink to={to}>
      <CardTitleText text={text} />
    </CardLink>
  </LayoutCard>
);

export default CardParts;
