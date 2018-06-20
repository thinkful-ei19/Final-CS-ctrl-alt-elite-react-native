import React from 'react';
import { connect } from 'react-redux';
import { addAppointment } from '../actions/appointment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { View, TextInput, Text, Button } from 'react-native';
import DateTimePickerInput from './DateTimePickerInput';

class AptForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            email: '',
            notes: '',
            checked: false
        }
    }

    handleSubmitValue = (event, type) => {
        if (type === 'name') {
          this.setState({
            name: event
          });
        }
        if (type === 'phone') {
          this.setState({
            phone: event
          });
        }
        if (type === 'email') {
          this.setState({
            email: event
          });
        }
        if (type === 'notes') {
          this.setState({
            notes: event
          });
        }
      }

    render() {
        return (
          <View>
            <Text>Client Name</Text>
                <TextInput
                    className="appointments__input"
                    id="name"
                    label="Client Name"
                    type="name"
                    value={this.state.name}
                    onChangeText={(name) => this.handleSubmitValue( name, 'name' )} />
                <Text>Phone Number</Text>
                <TextInput
                    className="appointments__input"
                    id="phone"
                    label="Phone Number"
                    type="phonenumber"
                    value={this.state.phone}
                    onChangeText={(phone) => this.handleSubmitValue( phone, 'phone' )} />
                <Text>Email</Text>
                <TextInput
                    className="appointments__input"
                    id="email"
                    label="Email Address"
                    type="email"
                    value={this.state.email}
                    onChangeText={(email) => this.handleSubmitValue( email, 'email' )} />
                <DateTimePickerInput />
                <Button
                onPress={() => {
                  const values = {
                    name: this.state.name,
                    phone: this.state.phone,
                    email: this.state.email,
                    date: this.props.selectedDate,
                    time: this.props.selectedTime,
                    checked: this.state.checked,
                    notes: this.state.notes
                  }
                  if (values.date === '') {
                    return alert('Must enter in valid date');
                  } if (values.time === '') {
                    return alert('Must enter in valid time');
                  } 
                  console.log('!!', values);
                  this.props.dispatch(addAppointment(this.props.authToken, values, this.props.currentUser.id))
                }}
                title="Schedule"/>
            </View>
        )
    }
}

const mapStateToProps = state => {
  return {
    authToken: state.auth.authToken,
    currentUser: state.auth.currentUser,
    selectedDate : state.appointmentReducer.selectedDate,
    selectedTime: state.appointmentReducer.selectedTime,
  }
};

export default connect(mapStateToProps)(AptForm);