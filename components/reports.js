import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

export default class Reports extends React.Component {
    render() {
        return (
            <Text></Text>
        )
    }
}

// class Reports extends React.Component {
//     render() {
//         let apptInfo = []; 
//         let janCount = 0;
//         let febCount = 0;
//         let marCount = 0;
//         let aprCount = 0;
//         let mayCount = 0;
//         let juneCount = 0;
//         let julyCount = 0;
//         let augCount = 0;
//         let septCount = 0;
//         let octCount = 0;
//         let novCount = 0;
//         let decCount = 0;

//         const totalAppointmentsForUser = this.props.user.appointments.length;

//         const filterAppts = this.props.user.appointments.map((appointment) => {
//             const formatTime = moment(appointment.time).format('MMMM Do YYYY');
//             if (formatTime.includes('January')) {
//                  janCount ++;
//             } if (formatTime.includes('February')) {
//                  febCount ++;
//             } if (formatTime.includes('March')) {
//                  marCount ++;
//              } if (formatTime.includes('April')) {
//                  aprCount ++;
//              } if (formatTime.includes('May')) {
//                  mayCount ++;
//              } if (formatTime.includes('June')) {
//                  juneCount ++;
//              } if (formatTime.includes('July')) {
//                  julyCount ++;
//              } if (formatTime.includes('August')) {
//                  augCount ++;
//              } if (formatTime.includes('September')) {
//                  septCount ++;
//              } if (formatTime.includes('October')) {
//                  octCount ++;
//              } if (formatTime.includes('November')) {
//                  novCount ++;
//              } if (formatTime.includes('December')) {
//                  decCount ++;
//              }           
//         });


//         return (
//             <Text></Text>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         authToken: state.auth.authToken,
//         currentUser: state.auth.currentUser,
//         selectedDate: state.calendarReducer.selectedDate,
//     }
// };

// export default connect(mapStateToProps)(Reports);