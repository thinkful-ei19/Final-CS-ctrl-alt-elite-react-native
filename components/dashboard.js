import React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Dashboard extends React.Component {

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text id="app-name">SCHEDULR</Text>
          <Text id="app-description">Dashboard</Text>
        </View>
      );
    }
  }

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.currentUser !== null,
        authToken: state.auth.authToken,
        currentUser: state.auth.currentUser,
        selectedDate: state.calendarReducer.selectedDate,
        selectedTab: state.tabsReducer.selectedTab,
        calendar: state.calendarReducer.calendar
    }
};

export default connect(mapStateToProps)(Dashboard);