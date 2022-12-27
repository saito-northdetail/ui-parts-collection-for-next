import Link from 'next/link';
import styles from '../../styles/organisms/Header.module.scss';

const Header = () => (
  <header className={styles.l_header}>
    <div className={`${styles.l_headerInner} inner`}>
      <Link href='/'>
        <a className={styles.c_logo}>UIパーツ集</a>
      </Link>
    </div>
  </header>
);

export default Header;
