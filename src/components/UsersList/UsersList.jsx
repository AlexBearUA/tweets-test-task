import { UserCard } from 'components/UserCard/UserCard';
import { users } from '../../data/users';
import css from './UsersList.module.scss';

export const UsersList = () => {
  console.log(users);

  return (
    <ul className={css.UsersList}>
      {users.map(({ user, tweets, followres, avatar, id }) => (
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
  );
};
