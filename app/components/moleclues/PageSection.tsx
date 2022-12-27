import { ReactNode } from 'react';
import styles from '../../styles/moleclues/PageSection.module.scss';
import LayoutSection from '../atoms/LayoutSection';

type TProps = {
  title?: string;
};

type TChildren = {
  children?: ReactNode;
};

const PageSection = ({ title, children }: TProps & TChildren) => (
  <LayoutSection>
    <h2 className={styles.c_title}>{title}</h2>
    {children}
  </LayoutSection>
);

export default PageSection;
