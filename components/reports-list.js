import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class ReportsList extends React.Component {
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

        return(
            <View style={styles.form}>
                <Text>
                   hellooooo
                </Text>
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

export default connect(mapStateToProps)(ReportsList);