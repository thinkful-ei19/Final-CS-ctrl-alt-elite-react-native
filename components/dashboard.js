import React from 'react';
import { Button, View, ScrollView, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import Calendar from './calendar';
import HeaderMain from './HeaderMain';
import AptForm from './AptForm';

class Dashboard extends React.Component {

    render() {
      return (
        <View style={styles.dashboard}>
            <HeaderMain/>
            <ScrollView>
                <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={300} enabled>
                    <Calendar />
                    <AptForm />
                </KeyboardAvoidingView>
            </ScrollView>
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