import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ReportsList from './reports-list';
import HeaderMain from './HeaderMain';
import { LineChart, Grid, BarChart } from 'react-native-svg-charts'
import moment from 'moment';

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            month: ''
        }
    }

    handlePress(e) {
        console.log(e);
    }
    render() {
        // const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];
        const svgs = [
            { onPress: () => console.log('apples') }
        ]
        const keys   = [ 'apples', 'bananas', 'cherries', 'dates' ]
       
        const fill = 'rgb(134, 65, 244)'
        const data   = [ 50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80 ]
        return (
        <View> 
            <HeaderMain />
            <Text>Insert line chart</Text>
            <BarChart
                style={{ height: 200 }}
                data={ data }
                // svg={{ fill }}
                keys={ keys }
                contentInset={{ top: 30, bottom: 30 }}
                onPress={() => this.handlePress}
                svgs = { svgs }
            >
                <Grid/>
            </BarChart>


            {/* <TouchableOpacity>
            <LineChart
                style={{ height: 200 }}
                data={ data }
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
                // svgs = { svgs }
                onPressItem={() => console.log('hi')}
            >
                <Grid />
                </LineChart>
                </TouchableOpacity> */}
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