import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import ReportsList from './reports-list';

class Reports extends React.Component {
    render() {
        return (
            <View style={styles.form}> 
                   <ReportsList />
            </View>
        )
    }
}


const styles = {
    form: {
        marginTop: 50,
    },
    textBox: {
        padding: 10,
        marginTop: 60,
        width: '100%'
    },
    submitButton: {
        padding: 10,
        width: '100%'
    }
}

const mapStateToProps = state => {
    return {
        authToken: state.auth.authToken,
        currentUser: state.auth.currentUser,
        selectedDate: state.calendarReducer.selectedDate,
    }
};

export default connect(mapStateToProps)(Reports);