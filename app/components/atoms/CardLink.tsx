import Link from 'next/link';
import { ReactNode } from 'react';
import styles from '../../styles/atoms/CardLink.module.scss';

type TProps = {
  to: string;
}

type TChildren = {
  children?: ReactNode;
}

const CardLink = ({ children, to }: TChildren & TProps) => (
  <Link href={to}>
    <a className={styles.c_link}>{ children }</a>
  </Link>
);

export default CardLink;
