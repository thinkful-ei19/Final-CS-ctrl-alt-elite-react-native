import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import moment from 'moment';

export default class ReportsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }
    
    render() {
        let apptInfo = []; 
        let janCount = 0;
        let febCount = 0;
        let marCount = 0;
        let aprCount = 0;
        let mayCount = 0;
        let juneCount = 0;
        let julyCount = 0;
        let augCount = 0;
        let septCount = 0;
        let octCount = 0;
        let novCount = 0;
        let decCount = 0;

    console.log('dis',this.props.user);

        
        const totalAppointmentsForUser = this.props.user.appointments.length;
        // console.log(totalAppointmentsForUser);
        const filterAppts = this.props.user.appointments.map((appointment) => {
            const formatTime = moment(appointment.time).format('MMMM Do YYYY');
            if (formatTime.includes('January')) {
                 janCount ++;
            } if (formatTime.includes('February')) {
                 febCount ++;
            } if (formatTime.includes('March')) {
                 marCount ++;
             } if (formatTime.includes('April')) {
                 aprCount ++;
             } if (formatTime.includes('May')) {
                 mayCount ++;
             } if (formatTime.includes('June')) {
                 juneCount ++;
             } if (formatTime.includes('July')) {
                 julyCount ++;
             } if (formatTime.includes('August')) {
                 augCount ++;
             } if (formatTime.includes('September')) {
                 septCount ++;
             } if (formatTime.includes('October')) {
                 octCount ++;
             } if (formatTime.includes('November')) {
                 novCount ++;
             } if (formatTime.includes('December')) {
                 decCount ++;
             }           
        });

      console.log('months', juneCount)


        return(
            <View style={styles.form}>
                
                <Text>Monthly Reports</Text>
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

