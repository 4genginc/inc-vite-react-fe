import React from 'react';
import { axiosWithAuth } from '../../../api';
import RanderUserPage from './RanderUserPage';

function UserList() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setIsLoading(true);
    setError(null);
    axiosWithAuth()
      .get('/users/')
      .then(response => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error loading users: {error.message}</div>;
  }

  return (
    <div>
      {users.map((user, index) => 
        <RanderUserPage key={user.id || index} user={user} />
      )}
    </div>
  );
}

export default UserList;
