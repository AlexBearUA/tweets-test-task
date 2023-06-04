import { useUpdateUserMutation } from 'redux/usersAPI';
import { convertNumber } from 'helpers/convertNumber';

import css from './UserCard.module.scss';

export const UserCard = ({
  user,
  tweets,
  followres,
  avatar,
  following,
  id,
}) => {
  const [updateUser] = useUpdateUserMutation();

  const changeFollowingStatus = () => {
    const followingStatus = !following;
    const updatedFollowersAmount = followingStatus
      ? (followres += 1)
      : (followres -= 1);

    updateUser({
      id,
      updatedFollowersAmount,
      followingStatus,
    });
  };

  return (
    <div className={css.UserCard}>
      <p className={css.UserName}>{user}</p>
      <div className={css.AvatarThumb}>
        <img className={css.Avatar} src={avatar} alt="avatar" />
      </div>
      <span className={css.DekorLine}></span>
      <p className={css.CardText}>{convertNumber(tweets)} tweets</p>
      <p className={css.CardText}>{convertNumber(followres)} followers</p>

      {following ? (
        <button
          onClick={changeFollowingStatus}
          type="button"
          className={css.FollowingBtn}
        >
          Following
        </button>
      ) : (
        <button
          onClick={changeFollowingStatus}
          className={css.FollowBtn}
          type="button"
        >
          Follow
        </button>
      )}
    </div>
  );
};
