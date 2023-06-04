import css from './Home.module.scss';
const Home = () => {
  return (
    <div className={css.homePage}>
      <h1 className={css.homeTitle}>follow famous people</h1>
      <p className={css.homeText}>and the white rabbit ;)</p>
    </div>
  );
};

export default Home;
