import React from 'react';
import { connect } from 'react-redux';
import { editClient } from '../actions/clients';
import { View, TextInput, Text, Button } from 'react-native';


class EditClientForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            email: ''
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
      }

    render() {
        return (
          <View>
            <Text>Client Name</Text>
                <TextInput
                    id="name"
                    label="Client Name"
                    type="name"
                    value={this.state.name}
                    onChangeText={(name) => this.handleSubmitValue( name, 'name' )} />
                <Text>Phone Number</Text>
                <TextInput
                    id="phone"
                    label="Phone Number"
                    type="phonenumber"
                    value={this.state.phone}
                    onChangeText={(phone) => this.handleSubmitValue( phone, 'phone' )} />
                <Text>Email</Text>
                <TextInput
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
                  console.log('VALUES', values);
                  this.props.dispatch(editClient(this.props.authToken, values, this.props.clientId, this.props.currentUser.id))
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