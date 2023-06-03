import { useState, useEffect } from 'react';
import { UserCard } from 'components/UserCard/UserCard';
import { allUsers } from '../../data/users';
import css from './UsersList.module.scss';

export const UsersList = () => {
  const [next, setNext] = useState(3);
  const [users, setUsers] = useState([]);

  const handleLoadMore = () => {
    setNext(next + 3);
  };

  useEffect(() => {
    setUsers(allUsers);
  }, []);

  return (
    <>
      <ul className={css.UsersList}>
        {users.slice(0, next).map(({ user, tweets, followres, avatar, id }) => (
          <li key={id}>
            <UserCard
              user={user}
              tweets={tweets}
              followres={followres}
              avatar={avatar}
              id={id}
            />
          </li>
        ))}
      </ul>
      {next < users.length && (
        <button onClick={handleLoadMore} className={css.LoadMoreBtn}>
          Load more
        </button>
      )}
    </>
  );
};
