import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import ReportsList from './reports-list';
import HeaderMain from './HeaderMain';
import DateTimePickerMonth from './DateTimePickerMonth';
import MonthSelectorCalendar from './month-picker';

class Reports extends React.Component {
    render() {
        // console.log('halp', this.props.currentUser)
        return (
            <View> 
                <HeaderMain />
                <DateTimePickerMonth />
                <MonthSelectorCalendar />
                <ReportsList user={this.props.currentUser}/>
            </View>
        )
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