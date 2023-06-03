export const getFilteredUsers = (users, filter) => {
  switch (filter.value) {
    case 'followings':
      return users.filter(user => user.following);
    case 'follow':
      return users.filter(user => !user.following);
    default:
      return users;
  }
};
