import React from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './components/login';
import LandingPage from './components/landing-page';
import Dashboard from './components/dashboard';
import Reports from './components/reports';
import { refreshAuthToken } from './actions/auth';

const RootStack = createStackNavigator(
  {
    LandingPage: LandingPage,
    Login: Login,
    Dashboard: Dashboard,
    // WeeklyView: WeeklyView,
    // Clients: Clients,
    // Registrationpage: Registrationpage,
    Reports: Reports
  },
  {
    initialRouteName: 'Dashboard',
  }
);

class Root extends React.Component {

  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
        // When we are logged in, refresh the auth token periodically
        this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
        // Stop refreshing when we log out
        this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
      this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
      this.refreshInterval = setInterval(
          () => this.props.dispatch(refreshAuthToken()),
          59 * 60 * 1000 // One hour
      );
  }

  stopPeriodicRefresh() {
      if (!this.refreshInterval) {
          return;
      }
      clearInterval(this.refreshInterval);
  }

  componentDidMount() {
      if (!this.props.loggedIn) {
          console.log(this.props)
        // this.props.navigation.navigate('Login')
      }
  }

  render() {
    return (
      <RootStack />
    );
  }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default connect(mapStateToProps)(Root);
