import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { View, TextInput, Text, Button } from 'react-native';
import DateTimePickerInput from './DateTimePickerInput';

export default class AptForm extends React.Component {
    constructor(props) {
        super(props)
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
        if (type === 'date') {
          this.setState({
            date: event
          });
        }
        if (type === 'time') {
          this.setState({
            time: event
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
                onPress={() => {return}}
                title="Schedule"/>
            </View>
        )
    }
}