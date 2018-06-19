import React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Calendar from './calendar';
import HeaderMain from './HeaderMain';

class Dashboard extends React.Component {

    render() {
      return (
        <View style={styles.dashboard}>
            <HeaderMain/>
            <Calendar />
        </View>
      );
    }
}

const styles = {
    dashboard: {

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