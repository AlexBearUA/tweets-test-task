import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
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
  const [updateUser, { isLoading, isSuccess, isError }] =
    useUpdateUserMutation();

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

  useEffect(() => {
    isSuccess && !following && toast.success(`You are following ${user} now`);
    isSuccess && following && toast.success(`You stoped following ${user}`);
    isError && !following && toast.error(`Ooops, something going wrong...`);
    isError && following && toast.error(`Ooops, something going wrong...`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError]);

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
          disabled={isLoading}
          type="button"
          className={css.FollowingBtn}
        >
          {isLoading ? <>Changing status...</> : <>Following</>}
        </button>
      ) : (
        <button
          onClick={changeFollowingStatus}
          disabled={isLoading}
          className={css.FollowBtn}
          type="button"
        >
          {isLoading ? <>Changing status...</> : <>Follow</>}
        </button>
      )}
    </div>
  );
};
