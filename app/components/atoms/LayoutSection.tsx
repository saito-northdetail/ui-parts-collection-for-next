import { ReactNode } from 'react';
import styles from '../../styles/atoms/LayoutSection.module.scss';

type TChildren = {
  children?: ReactNode;
};

const LayoutSection = ({ children }: TChildren) => (
  <section className={styles.c_section}>{children}</section>
);

export default LayoutSection;
