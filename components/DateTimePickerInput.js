import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { selectDate, selectTime } from '../actions/appointment';
 
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
    console.log('A date has been picked: ', date);
    this.props.dispatch(selectDate(date));
    this.props.dispatch(selectTime(date));
    this._hideDateTimePicker();
  };


  render () {
    return (
      <View >
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Choose a date and time</Text>
        </TouchableOpacity>
        <DateTimePicker
          mode='datetime'
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDateTimePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }
}


export default connect()(DateTimePickerInput);