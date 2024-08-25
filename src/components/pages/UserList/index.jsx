import { connect } from 'react-redux';
import { fetchUsers } from '../../../state/actions/userListActions.jsx';
import UserListContainer from './UserListContainer.jsx';

const mapStateToProps = (state) => ({
  users: state.userListReducer.users || [],
  isLoading: state.userListReducer.loading,
  error: state.userListReducer.error,
});

const mapDispatchToProps = {
  fetchUsers,
};

// Use named export here
export const UserListPage = connect(mapStateToProps, mapDispatchToProps)(UserListContainer);