// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List } from '../../common';
import RenderUserDetailPage from './RenderUserDetailPage.jsx';

const UserDetailContainer = ({ user, isLoading, error, fetchUserDetails }) => {
  const { user_id } = useParams();
  const History = useHistory();

  useEffect(() => {
    fetchUserDetails(user_id);
  }, [fetchUserDetails, user_id]);  // Include 'user_id' in the dependency array

  if (!user) {
    History("/landing");  // Redirect to home if no items exist
    return null;
  }

  const getUserData = () => {
    return new Promise((resolve, reject) => {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  };

  if (isLoading) {
    return <div>Loading User Profiles...</div>;
  }

  return (
    <List
      getItemsData={getUserData}
      LoadingComponent={() => <div>Loading...</div>}
      RenderItems={RenderUserDetailPage}
    />
  );
};

UserDetailContainer.propTypes = {
  user: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  fetchUserDetails: PropTypes.func.isRequired
};
export default UserDetailContainer;