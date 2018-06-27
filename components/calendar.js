import React from 'react';
import {connect} from 'react-redux';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { changeMonth, changeYear, toggleCalendar } from '../actions/calendar';
import Days from './days';
import Dates from './dates';
// import SvgIcon from '@material-ui/core/SvgIcon';
// import IconButton from '@material-ui/core/IconButton';
import { Icon } from 'react-native-elements'


class Calendar extends React.Component {

    toggleCalendar() {
        this.props.dispatch(toggleCalendar('weekly'))
    }

    render() {
        let currentMonth = this.props.selectedMonth;
        let currentYear = this.props.selectedYear;
        const component = this;
        const monthYear = moment(String(`${currentYear}-${currentMonth}`)).format('MMMM YYYY');
        function increment() {
            currentMonth ++
            if (currentMonth > 12) {
                currentMonth = 1
                component.props.dispatch(changeYear(Number(currentYear) + 1))
            }
            if (currentMonth < 10) {
                currentMonth = '0' + currentMonth
            }
            component.props.dispatch(changeMonth(currentMonth))
        }
        function decrement() {
            currentMonth --
            if (currentMonth < 1) {
                currentMonth = 12
                component.props.dispatch(changeYear(Number(currentYear) - 1))
            }
            if (currentMonth < 10) {
                currentMonth = '0' + currentMonth
            }
            component.props.dispatch(changeMonth(currentMonth))
        }
        return (
            <View style={styles.calendar}>
                <View style={styles.head}>
                    <TouchableOpacity
                    onPress={decrement}
                    >
                        <Icon name='chevron-left' color='white'/>
                    </TouchableOpacity>
                        <Text 
                        style={styles.month}
                        >{monthYear}</Text>
                    <TouchableOpacity
                    onPress={increment}
                    >
                        <Icon name='chevron-right' color='white'/>
                    </TouchableOpacity>
                </View>
                <Days/>
                <Dates/>
            </View>
        )
    }
}

const styles = {
    calendar: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 5
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
        backgroundColor: 'black',
        marginBottom: 10
    },
    month: {
        fontSize: 24,
        color: 'white'
    },
    button: {
        fontSize: 24
    }
}

const mapStateToProps = state => {
    return {
        authToken: state.auth.authToken,
        currentUser: state.auth.currentUser,
        selectedMonth: state.calendarReducer.selectedMonth,
        selectedYear: state.calendarReducer.selectedYear,
        calendar: state.calendarReducer.calendar        
    }
};

export default connect(mapStateToProps)(Calendar);