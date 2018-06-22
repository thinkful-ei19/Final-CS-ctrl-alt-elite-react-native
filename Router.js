import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/login';
import LandingPage from './components/landingPage';
import Navigation from './components/navigation';
import Dashboard from './components/dashboard';
import ScheduleList from './components/schedule-list';
import Reports from './components/reports';
import RegistrationForm from './components/registration-form';
import Clients from './components/clients';
import AddClientForm from './components/AddClientForm';

class RouterComponent extends React.Component {
    
//   componentDidUpdate(prevProps) {
//     if (!prevProps.loggedIn && this.props.loggedIn) {
//         // When we are logged in, refresh the auth token periodically
//         this.startPeriodicRefresh();
//     } else if (prevProps.loggedIn && !this.props.loggedIn) {
//         // Stop refreshing when we log out
//         this.stopPeriodicRefresh();
//     }
//   }

//   componentWillUnmount() {
//       this.stopPeriodicRefresh();
//   }


//   startPeriodicRefresh() {
//       this.refreshInterval = setInterval(
//           () => this.props.dispatch(refreshAuthToken()),
//           59 * 60 * 1000 // One hour
//       );
//   }

//   stopPeriodicRefresh() {
//       if (!this.refreshInterval) {
//           return;
//       }
//       clearInterval(this.refreshInterval);
//   }

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="landingPage" component={LandingPage} title="landingPage" hideNavBar/>
                    <Scene key="login" component={Login} title="login" hideNavBar />
                    <Scene key="register" component={RegistrationForm} title="register"
                    hideNavBar />
                    <Scene key="navigation" component={Navigation} title="navigation" hideNavBar/>     
                    <Scene key="dashboard" component={Dashboard} title="dashboard" hideNavBar/>    
                    <Scene key="scheduleList" component={ScheduleList} title="scheduleList" hideNavBar/> 
                    <Scene key="reports" component={Reports} title="reports" hideNavBar/>     
                    <Scene key="clients" component={Clients} title="clients" hideNavBar/>    
                    <Scene key="addClient" component={AddClientForm} title="addClient" hideNavBar/>         
     
                </Scene>
            </Router>
        );
    }

}


const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
})

export default (connect(mapStateToProps)(RouterComponent))

// export default RouterComponent;