import styles from '../styles/Banner.module.css'

const Banner = () => {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.bannerImage}></div>
        <div className={styles.bannerText}>
          <h1>Welcome to Hawaii</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
