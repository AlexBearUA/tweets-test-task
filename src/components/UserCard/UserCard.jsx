import { useDispatch } from 'react-redux';
import { editUser } from 'redux/operations';

import css from './UserCard.module.scss';

export const UserCard = ({
  user,
  tweets,
  followres,
  avatar,
  following,
  id,
}) => {
  const dispatch = useDispatch();

  const changeFollowingStatus = () => {
    const followingStatus = !following;

    dispatch(
      editUser({
        user,
        tweets,
        followres,
        avatar,
        followingStatus,
        id,
      })
    );
  };

  return (
    <div className={css.UserCard}>
      <p className={css.UserName}>{user}</p>
      <div className={css.AvatarThumb}>
        <img className={css.Avatar} src={avatar} alt="avatar" />
      </div>
      <span className={css.DekorLine}></span>
      <p className={css.CardText}>{tweets} tweets</p>
      <p className={css.CardText}>{followres} followers</p>

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
