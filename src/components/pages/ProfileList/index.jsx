import { connect } from 'react-redux';
import { fetchUsers } from '../../../state/actions/userActions.jsx';
import ProfileListContainer from './ProfileListContainer.jsx';

const mapStateToProps = (state) => ({
  users: state.userReducer.users || [],
  isLoading: state.userReducer.loading,
  error: state.userReducer.error,
});

const mapDispatchToProps = {
  fetchUsers,
};

// Use named export here
export const ProfileListPage = connect(mapStateToProps, mapDispatchToProps)(ProfileListContainer);