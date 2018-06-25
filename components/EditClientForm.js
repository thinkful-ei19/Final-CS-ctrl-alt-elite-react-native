import React from 'react';
import { connect } from 'react-redux';
import { editClient } from '../actions/clients';
import { toggleClient } from '../actions/clients';
import { View, TextInput, Text, Button } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import { changeTab } from '../actions/tabs';


class EditClientForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            email: ''
        }
    }

    componentDidMount() {
      this.props.dispatch(changeTab('editClient'))
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
      }

    render() {
      const findClient = this.props.currentUser.clients.find((client) => {
        return (
            client.id === this.props.clientId
        );
    });
        return (
          <View>
            <View>
                <View>
                    <Text>{findClient.name}</Text>
                    <Text>{findClient.phone}</Text>
                    <Text>{findClient.email}</Text>
                </View>
             </View>
            <FormLabel>Client Name</FormLabel>
                <FormInput
                    id="name"
                    label="Client Name"
                    type="name"
                    value={this.state.name}
                    onChangeText={(name) => this.handleSubmitValue( name, 'name' )} />
                <FormLabel>Phone Number</FormLabel>
                <FormInput
                    id="phone"
                    label="Phone Number"
                    type="phonenumber"
                    value={this.state.phone}
                    onChangeText={(phone) => this.handleSubmitValue( phone, 'phone' )} />
                <FormLabel>Email</FormLabel>
                <FormInput
                    id="email"
                    label="Email Address"
                    type="email"
                    value={this.state.email}
                    onChangeText={(email) => this.handleSubmitValue( email, 'email' )} />
                <Button
                onPress={() => {
                  const values = {
                    name: this.state.name,
                    phone: this.state.phone,
                    email: this.state.email
                  } 
                  this.props.dispatch(editClient(this.props.authToken, values, this.props.clientId, this.props.currentUser.id))
                  this.props.dispatch(toggleClient(''));
                }}
                title="Edit Client"/>
            </View>
        )
    }
}

const mapStateToProps = state => {
  return {
    authToken: state.auth.authToken,
    currentUser: state.auth.currentUser
  }
};

export default connect(mapStateToProps)(EditClientForm);