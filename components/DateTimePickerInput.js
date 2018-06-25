import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { selectAppointmentDate, selectTime } from '../actions/appointment';
 
class DateTimePickerInput extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    isDatePickerVisible: false,
    isTimePickerVisible: false
  };
}
 
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDateTimePicked = (date) => {
    this.props.dispatch(selectAppointmentDate(date));
    this.props.dispatch(selectTime(date));
    this._hideDateTimePicker();
  };


  render () {
    return (
      <View >
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text style={styles.button}>Date/Time</Text>
        </TouchableOpacity>
        <DateTimePicker
          is24Hour={false}
          mode='datetime'
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDateTimePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }
}

const styles = {

  button: {
    alignItems: 'center',
    backgroundColor: '#D6EAF8',
    padding: 10,
    margin: 10,
    borderRadius: 25,
  }
}

export default connect()(DateTimePickerInput);