import { connect } from 'react-redux';
import { fetchUsers } from '../../../../../state/actions/userActions.jsx';
import UserList from './UserList.jsx';  // Assuming UserList is now in a separate file

const mapStateToProps = (state) => ({
  users: state.userReducer.users || [],
  isLoading: state.userReducer.loading,
  error: state.userReducer.error
});

const mapDispatchToProps = {
  fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
