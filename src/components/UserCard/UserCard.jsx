import css from './UserCard.module.scss';

export const UserCard = ({ user, tweets, followres, avatar }) => {
  return (
    <div className={css.UserCard}>
      <p className={css.UserName}>{user}</p>
      <div className={css.AvatarThumb}>
        <img className={css.Avatar} src={avatar} alt="avatar" />
      </div>
      <span className={css.DekorLine}></span>
      <p className={css.CardText}>{tweets} tweets</p>
      <p className={css.CardText}>{followres} followers</p>
      <button className={css.FollowBtn} type="button">
        Follow
      </button>
    </div>
  );
};
