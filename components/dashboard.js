import React from 'react';
import { Button, View, ScrollView, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import Calendar from './calendar';
import HeaderMain from './HeaderMain';
import AptForm from './AptForm';
import { changeTab } from '../actions/tabs';

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.dispatch(changeTab('dashboard'))
      }

    render() {
      return (
        <ImageBackground source={{ uri: 'https://s8.postimg.cc/r0k2y9x2d/nathan-dumlao-532282-unsplash_2.jpg' }} style={{ width: '100%', height: '100%' }}>
        <View style={styles.dashboard}>
            <HeaderMain/>
            <ScrollView>
                <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={300} enabled>
                    <Calendar />
                    <AptForm />
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
        </ImageBackground>
      );
    }
}

const styles = {
    dashboard: {
        marginBottom: 70
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