import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { UsersList } from '../components/UsersList/UsersList';
import { Loader } from 'components/Loaders/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { useGetUsersQuery } from 'redux/usersAPI';
import { getFilteredUsers } from 'helpers/getFilteredUsers';
import css from './Tweets.module.scss';

const Tweets = () => {
  const [page, setPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    label: 'Show all',
    value: 'all',
  });
  const { data: users, isFetching, isError } = useGetUsersQuery(page);
  const options = [
    { value: 'all', label: 'Show all' },
    { value: 'follow', label: 'Follow' },
    { value: 'followings', label: 'Followings' },
  ];

  useEffect(() => {
    setFilteredUsers(getFilteredUsers(users, selectedOption));
  }, [users, selectedOption]);

  return (
    <>
      {isError ? (
        <ErrorMessage />
      ) : (
        <>
          <div className={css.tweetsHeader}>
            <Select
              className={css.select}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
            <Link className={css.backLink} to="/">
              Back to Home
            </Link>
          </div>

          {isFetching && <Loader />}

          <UsersList users={filteredUsers} />

          <div className={css.btnWraper}>
            <button
              className={css.paginationBtn}
              type="button"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
            <span className={css.currentPage}>{page}</span>
            <button
              className={css.paginationBtn}
              type="button"
              disabled={page === 3}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Tweets;
