import styles from '../../styles/moleclues/PageSummary.module.scss';

type TProps = {
  title?: string;
  description?: string;
}

const PageSection = ({ title, description }: TProps) => (
  <section className={styles.c_summary}>
    <h1 className={styles.c_title}>
      { title }
    </h1>
    {description && (
      <p className={styles.c_description}>
        { description }
      </p>
    )}
  </section>
);

export default PageSection;
