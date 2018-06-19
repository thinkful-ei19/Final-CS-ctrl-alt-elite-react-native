import React from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import DateTimePickerInput from './DateTimePickerInput';

export default class AptForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            phone: '',
            email: '',
            date: '',
            time: '10:00',
            notes: '',
            checked: false
        }
    }

    handleSubmitValue = (event) => {
        if (event.target.id === 'name') {
          this.setState({
            name: event.target.value
          });
        }
        if (event.target.id === 'phone') {
          this.setState({
            phone: event.target.value
          });
        }
        if (event.target.id === 'email') {
          this.setState({
            email: event.target.value
          });
        }
        if (event.target.id === 'date') {
          this.setState({
            date: event.target.value
          });
        }
        if (event.target.id === 'time') {
          this.setState({
            time: event.target.value
          });
        }
        if (event.target.id === 'notes') {
          this.setState({
            notes: event.target.value
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
                    onChangeText={(name) => this.handleSubmitValue({ name })} />
                <Text>Phone Number</Text>
                <TextInput
                    className="appointments__input"
                    id="phone"
                    label="Phone Number"
                    type="phonenumber"
                    value={this.state.phone}
                    onChangeText={(phone) => this.handleSubmitValue({ phone })} />
                <Text>Email</Text>
                <TextInput
                    className="appointments__input"
                    id="email"
                    label="Email Address"
                    type="email"
                    value={this.state.email}
                    onChangeText={(email) => this.handleSubmitValue({ email })} />
                <DateTimePickerInput />
                <Button title="Schedule"/>
            </View>
        )
    }
}