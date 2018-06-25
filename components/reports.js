import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import ReportsList from './reports-list';
import HeaderMain from './HeaderMain';
import { LineChart, Grid } from 'react-native-svg-charts'
import moment from 'moment';

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            month: ''
        }
    }
    render() {
        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
        // console.log('halp', this.props)
        return (
        <View> 
            <HeaderMain />
            <Text>Insert line chart</Text>
            <LineChart
                style={{ height: 200 }}
                data={ data }
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid/>
                </LineChart>
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