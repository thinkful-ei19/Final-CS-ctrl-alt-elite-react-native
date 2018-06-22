import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { selectAppointmentDate, selectTime } from '../actions/appointment';
 
class DateTimePickerMonth extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    isDatePickerVisible: false,
    isTimePickerVisible: false
  };
}
 
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDateTimePicked = (month) => {
    this.props.dispatch(selectAppointmentDate(month));
    this._hideDateTimePicker();
  };


  render () {
    return (
      <View >
        <Button 
            onPress={this._showDateTimePicker}
            title="Month"
            accessibilityLabel="Pick a Month"
        />
        <DateTimePicker
          is24Hour={false}
          mode='date'
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
    padding: 3,
    fontSize: 16
  }
}

export default connect()(DateTimePickerMonth);