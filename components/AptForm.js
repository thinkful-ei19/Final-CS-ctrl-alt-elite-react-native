import React from 'react';
import { connect } from 'react-redux';
import { addAppointment } from '../actions/appointment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { View, TextInput, Text } from 'react-native';
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
      <View style={styles.form}>
        <Text style={styles.text}>Client Name</Text>
        <FormInput
          containerStyle={{borderColor: 'black', borderWidth: 1, backgroundColor: 'white'}}
          id="name"
          label="Client Name"
          type="name"
          value={this.state.name}
          onChangeText={(name) => this.handleSubmitValue(name, 'name')} />
        <Text style={styles.text}>Phone Number</Text>
        <FormInput
          containerStyle={{borderColor: 'black', borderWidth: 1, backgroundColor: 'white'}}
          id="phone"
          label="Phone Number"
          type="phonenumber"
          value={this.state.phone}
          onChangeText={(phone) => this.handleSubmitValue(phone, 'phone')} />
        <Text style={styles.text}>Email</Text>
        <FormInput
          containerStyle={{borderColor: 'black', borderWidth: 1, backgroundColor: 'white'}}
          id="email"
          label="Email Address"
          type="email"
          value={this.state.email}
          onChangeText={(email) => this.handleSubmitValue(email, 'email')} />
        <DateTimePickerInput />
        <Text style={styles.time}>{moment(this.props.selectedTime).format('YYYY MM DD hh:mm a')}</Text>
        <Button
          backgroundColor='black'
          color='white'
          large={true}
          rounded
          icon={{ name: 'check'}}
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
            this.props.dispatch(addAppointment(this.props.authToken, values, this.props.currentUser.id))
          }}
          title="Schedule" />
      </View>

    )
  }
}

const styles = {
  form: {
    flex: 1,
    padding: 10,
  },
  input: {
    padding: 3
  },
  text: {
    fontSize: 16,
    padding: 10,
    marginLeft: 5,
    color: 'black'
  },
  time: {
    fontSize: 16,
    padding: 10,
    marginLeft: 90,
    color: 'black'
  }
}

const mapStateToProps = state => {
  return {
    authToken: state.auth.authToken,
    currentUser: state.auth.currentUser,
    selectedDate: state.appointmentReducer.selectedDate,
    selectedTime: state.appointmentReducer.selectedTime,
  }
};

export default connect(mapStateToProps)(AptForm);