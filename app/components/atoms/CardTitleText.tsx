import styles from '../../styles/atoms/CardTitleText.module.scss';

type TProps = {
  text?: string;
};

const CardTitleText = ({ text }: TProps) => <h2 className={styles.title}>{text}</h2>;

export default CardTitleText;
