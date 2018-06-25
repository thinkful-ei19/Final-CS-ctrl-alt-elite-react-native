import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import ReportsList from './reports-list';
import HeaderMain from './HeaderMain';
import DateTimePickerMonth from './DateTimePickerMonth';
// import MonthSelectorCalendar from 'react-native-month-selector';
import moment from 'moment';
import LineGraph from './reportsLineGraph';

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            month: ''
        }
    }
    render() {
        // console.log('halp', this.props.currentUser)
        return (
            <View> 
                <HeaderMain />
                {/* <DateTimePickerMonth /> */}
              
                {/* <Text>
                    Selected Month is { this.state.month && this.state.month.format('MMM YYYY')}
                </Text>
                <MonthSelectorCalendar
                    maxDate={moment('01-01-2200', 'DD-MM-YYYY')}
                    selectedDate={this.state.month}
                    monthTapped={(date) => this.setState({ month: date })}
                 /> */}
                 <LineGraph />
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