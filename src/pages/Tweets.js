import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { UsersList } from '../components/UsersList/UsersList';
import { useGetUsersQuery } from 'redux/usersAPI';
import css from './Tweets.module.scss';

const Tweets = () => {
  const [page, setPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState({
    label: 'All',
    value: 'all',
  });
  const [filteredUsers, setFilteredUsers] = useState([]);

  const { data: users } = useGetUsersQuery(page);

  const options = [
    { value: 'all', label: 'All' },
    { value: 'follow', label: 'Follow' },
    { value: 'followings', label: 'Followings' },
  ];

  const getFilteredUsers = (users, filter) => {
    switch (filter.value) {
      case 'followings':
        return users.filter(user => user.following);
      case 'follow':
        return users.filter(user => !user.following);
      default:
        return users;
    }
  };

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
