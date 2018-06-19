import React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class Days extends React.Component {
    
    render() {
        return (
            <View style={styles.calendar_days}>
                <Text style={styles.calendar_days_day}>SUN</Text>
                <Text style={styles.calendar_days_day}>MON</Text>
                <Text style={styles.calendar_days_day}>TUE</Text>
                <Text style={styles.calendar_days_day}>WED</Text>
                <Text style={styles.calendar_days_day}>THU</Text>
                <Text style={styles.calendar_days_day}>FRI</Text>
                <Text style={styles.calendar_days_day}>SAT</Text>
            </View>
        )
    }
}

const styles = {
    calendar_days: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight: 5
        // fontWeight: 700,
    },
    calendar_days_day: {
    }
}

//const mapStateToProps = state => ({})

//export default withRouter(connect(mapStateToProps)(Nav))