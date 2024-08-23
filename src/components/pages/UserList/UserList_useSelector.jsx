// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../state/actions/userActions.jsx';

const UserList = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {userData.loading && <div>Loading...</div>}
      {userData.error && <div>Error: {userData.error}</div>}
      <ul>
        {userData.users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;