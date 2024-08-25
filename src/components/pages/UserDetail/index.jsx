import { connect } from 'react-redux';
import { fetchUserDetails } from '../../../state/actions/userDetailActions.jsx';
import UserDetailContainer from './UserDetailContainer.jsx';

const mapStateToProps = (state) => {
  return ({
      user: state.userDetailReducer.user ,
      isLoading: state.userDetailReducer.loading,
      error: state.userDetailReducer.error,
  });
};

const mapDispatchToProps = {
  fetchUserDetails,
};

// Use named export here
export const UserDetailPage = connect(mapStateToProps, mapDispatchToProps)(UserDetailContainer);