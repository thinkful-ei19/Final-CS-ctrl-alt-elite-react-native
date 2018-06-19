import React from 'react';
import { View, TextInput, Text } from 'react-native';
import DateTimePickerInput from './DateTimePickerInput';

export default class AptForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Client Name',
            phone: '###-####',
            email: 'Client Email'
        }
    }

    render() {
        return (
            <View>
                <Text>Client Name</Text>
                <TextInput
                    value={this.state.name}
                    onChangeText={(name) => this.setState({ name })} />
                <Text>Phone Number</Text>
                <TextInput
                    value={this.state.phone}
                    onChangeText={(phone) => this.setState({ phone })} />
                <Text>Email</Text>
                <TextInput
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })} />
                <Text>Appointment Times</Text>
                <DateTimePickerInput />
            </View>
        )
    }
}