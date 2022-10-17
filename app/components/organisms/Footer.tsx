import styles from '../../styles/organisms/Footer.module.scss';

const Footer = () => (
  <footer className={styles.l_footer}>
    <div className={`${styles.l_footerInner} inner`}>
      <p className={styles.c_copyright}>©Ui Parts Collection All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
