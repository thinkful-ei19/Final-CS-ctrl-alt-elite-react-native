import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
 
export default class DateTimePickerInput extends React.Component {
  constructor(props){
    super()
  this.state = {
    isDatePickerVisible: false,
    isTimePickerVisible: false
  };
}
 
  _showDatePicker = () => this.setState({ isDatePickerVisible: true });

  _showTimePicker = () => this.setState({ isTimePickerVisible: true });

  _hideDatePicker = () => this.setState({ isDateTimePickerVisible: false });

  _hideTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDatePicker();
  };

  _handleTimePicked = (time) => {
    console.log('A time has been picked: ', time);
    this._hideTimePicker();
  };
 
  render () {
    console.log('is rendered');
    return (
      <View >
        <TouchableOpacity onPress={this._showDatePicker}>
          <Text>Choose a date</Text>
        </TouchableOpacity>
        <DateTimePicker
          mode='date'
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDatePicker}
        />
        <TouchableOpacity onPress={this._showTimePicker}>
          <Text>Choose a time</Text>
        </TouchableOpacity>
        <DateTimePicker
          mode='time'
          isVisible={this.state.isTimePickerVisible}
          onConfirm={this._handleTimePicked}
          onCancel={this._hideTimePicker}
        />
      </View>
    );
  }
 
}