import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ReportsList from './reports-list';
import HeaderMain from './HeaderMain';
import { LineChart, Grid, BarChart, StackedAreaChart, PieChart } from 'react-native-svg-charts'
import moment from 'moment';
import * as shape from 'd3-shape'
import { Header } from 'react-native-elements';

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            month: ''
        }
    }

    render() {
 
        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
 
        const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)
 
        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press', value)
                    
                },
                key: `pie-${index}`,
            }))
 
        return (
            <View>
                <HeaderMain />
            <PieChart
                style={ { height: 200 } }
                data={ pieData }
            />
            </View>
        )
    }

    // render() {
 
    //     const data = [
    //         {
    //             month: new Date(2015, 0, 1),
    //             apples: 3840,
    //             bananas: 1920,
    //             cherries: 960,
    //             dates: 400,
    //         },
    //         {
    //             month: new Date(2015, 1, 1),
    //             apples: 1600,
    //             bananas: 1440,
    //             cherries: 960,
    //             dates: 400,
    //         },
    //         {
    //             month: new Date(2015, 2, 1),
    //             apples: 640,
    //             bananas: 960,
    //             cherries: 3640,
    //             dates: 400,
    //         },
    //         {
    //             month: new Date(2015, 3, 1),
    //             apples: 3320,
    //             bananas: 480,
    //             cherries: 640,
    //             dates: 400,
    //         },
    //     ]
 
    //     const colors = [ '#8800cc', '#aa00ff', '#cc66ff', '#eeccff' ]
    //     const keys   = [ 'apples', 'bananas', 'cherries', 'dates' ]
    //     const svgs = [
    //                 { onPress: () => console.log('apples') },
    //                 { onPress: () => console.log('bananas') },
    //                 { onPress: () => console.log('cherries') },
    //                 { onPress: () => console.log('dates') },
    //             ]
 
    //     return (
    //         <View>
    //         <HeaderMain />
    //         <BarChart
    //             style={ { height: 200, paddingVertical: 16 } }
    //             data={ data }
    //             keys={ keys }
    //             colors={ colors }
    //             // curve={ shape.curveNatural }
    //             showGrid={ false }
    //             svgs={ svgs }
    //         />
    //         </View>
    //     )
    // }

    // handlePress(e) {
    //     console.log(e);
    // }
    // render() {
    //     // const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];
    //     const svgs = [
    //         { onPress: () => console.log('apples') },
    //         { onPress: () => console.log('bananas') },
    //         { onPress: () => console.log('cherries') },
    //         { onPress: () => console.log('dates') },
    //     ]
    //     const keys   = [ 'apples', 'bananas', 'cherries', 'dates' ]
       
    //     const fill = 'rgb(134, 65, 244)'
    //     const data   = [ 50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80 ]
    //     return (
    //     <View> 
    //         <HeaderMain />
    //         <Text>Insert line chart</Text>
    //         <BarChart
    //             style={{ height: 200 }}
    //             data={ data }
    //             // svg={{ fill }}
    //             keys={ keys }
    //             contentInset={{ top: 30, bottom: 30 }}
    //             onPress={() => this.handlePress}
    //             svgs = { svgs }
    //         >
    //             <Grid/>
    //         </BarChart>


    //         {/* <TouchableOpacity>
    //         <LineChart
    //             style={{ height: 200 }}
    //             data={ data }
    //             svg={{ stroke: 'rgb(134, 65, 244)' }}
    //             contentInset={{ top: 20, bottom: 20 }}
    //             // svgs = { svgs }
    //             onPressItem={() => console.log('hi')}
    //         >
    //             <Grid />
    //             </LineChart>
    //             </TouchableOpacity> */}
    //     </View>
    //     )
    // }
}



const mapStateToProps = state => {
   
    return {
        authToken: state.auth.authToken,
        currentUser: state.auth.currentUser,
        selectedDate: state.calendarReducer.selectedDate,
    }
};



export default connect(mapStateToProps)(Reports);