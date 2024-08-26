import React from 'react';
import PropTypes from 'prop-types';  // Make sure to import PropTypes
import { connect } from 'react-redux';
import RenderDashboardPage from './RenderDashboardPage.jsx';
import { getDashboardData } from '../../../state/actions/dashboardActions.jsx'; // Ensure this action is defined

class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.getDashboardData();
  }

  render() {
    return <RenderDashboardPage isLoading={this.props.isLoading} data={this.props.data} />;
  }
}

DashboardContainer.propTypes = {
  getDashboardData: PropTypes.func.isRequired, // Adding prop type validation for getDashboardData
  data: PropTypes.array.isRequired,            // Add appropriate type validation
  isLoading: PropTypes.bool.isRequired         // Ensure all props used are validated
};

const mapStateToProps = (state) => ({
  data: state.dashboardReducer.data,
  isLoading: state.dashboardReducer.isLoading,
});

const mapDispatchToProps = {
  getDashboardData
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
