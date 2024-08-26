import { connect } from 'react-redux';
import { login } from '../../../state/actions/authActions.jsx';
import RenderLandingPage from './RenderLandingPage.jsx';

const mapStateToProps = (state) => {

  return ({
    username: state.auth.username,
  });
};

const mapDispatchToProps = {
  login,
};


export const LandingPage = connect(mapStateToProps, mapDispatchToProps)(RenderLandingPage);

