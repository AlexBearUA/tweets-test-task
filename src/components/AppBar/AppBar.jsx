import { NavLink } from 'react-router-dom';
import css from './AppBar.module.scss';

export const AppBar = () => {
  return (
    <nav className={css.nav}>
      <NavLink className="link" to="/">
        Home
      </NavLink>

      <NavLink className="link" to="/tweets">
        Tweets
      </NavLink>
    </nav>
  );
};
