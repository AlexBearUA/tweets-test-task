import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { UsersList } from '../components/UsersList/UsersList';
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
  const { data: users } = useGetUsersQuery(page);
  const options = [
    { value: 'all', label: 'Show all' },
    { value: 'follow', label: 'Follow' },
    { value: 'followings', label: 'Followings' },
  ];

  useEffect(() => {
    setFilteredUsers(getFilteredUsers(users, selectedOption));
  }, [selectedOption, users]);

  return (
    <>
      <div className={css.TweetsHeader}>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
        <Link className={css.BackLink} to="/">
          Back to Home
        </Link>
      </div>
      <UsersList users={filteredUsers} />

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
