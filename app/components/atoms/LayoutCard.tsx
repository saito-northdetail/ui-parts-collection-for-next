import { ReactNode } from 'react';
import styles from '../../styles/atoms/LayoutCard.module.scss';

type TChildren = {
  children?: ReactNode;
};

const LayoutCard = ({ children }: TChildren) => <div className={styles.c_card}>{children}</div>;

export default LayoutCard;
