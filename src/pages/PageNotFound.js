import { Link } from 'react-router-dom';
import css from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <div className={css.notFound}>
      <p className={css.notFoundText}>Sorry, page not found</p>
      <Link className={css.backLink} to="/">
        Back to Home
      </Link>
    </div>
  );
};
export default PageNotFound;
