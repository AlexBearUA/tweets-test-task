import { useState } from 'react';
import { UsersList } from '../components/UsersList/UsersList';
import { useGetUsersQuery } from 'redux/usersAPI';
import css from './Tweets.module.scss';

const Tweets = () => {
  const [page, setPage] = useState(1);

  const { data: users } = useGetUsersQuery(page);

  return (
    <>
      <UsersList users={users} />

      <div className={css.BtnWraper}>
        <button
          className={css.PaginationBtn}
          type="button"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <span className={css.CurrentPage}>{page}</span>
        <button
          className={css.PaginationBtn}
          type="button"
          disabled={page === 3}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Tweets;
