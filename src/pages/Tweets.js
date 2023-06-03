import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { UsersList } from '../components/UsersList/UsersList';
import { selectUsers } from '../redux/selectors';

import css from './Tweets.module.scss';

const Tweets = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

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
