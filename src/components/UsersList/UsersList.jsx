import { UserCard } from 'components/UserCard/UserCard';

import css from './UsersList.module.scss';

export const UsersList = ({ users }) => {
  return (
    <ul className={css.usersList}>
      {users &&
        users.map(({ user, tweets, followres, avatar, id, following }) => (
          <li key={id}>
            <UserCard
              user={user}
              tweets={tweets}
              followres={followres}
              avatar={avatar}
              id={id}
              following={following}
            />
          </li>
        ))}
    </ul>
  );
};
