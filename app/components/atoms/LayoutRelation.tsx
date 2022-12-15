import { ReactNode } from 'react';
import styles from '../../styles/atoms/LayoutRelation.module.scss';

type TChildren = {
  children?: ReactNode;
}

const LayoutRelation = ({ children }: TChildren) => (
  <section className={styles.c_relation}>
    { children }
  </section>
);

export default LayoutRelation;
