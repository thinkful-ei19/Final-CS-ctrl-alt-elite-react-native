import React from 'react';
import { connect } from 'react-redux';
import { editClient } from '../actions/clients';
import { toggleClient } from '../actions/clients';
import { View, TextInput, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
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
        <View style={styles.form}>
        <Text style={styles.text}>Client Name</Text>
        <FormInput
          containerStyle={{ backgroundColor: 'white' }}
          id="name"
          label="Client Name"
          type="name"
          value={this.state.name}
          onChangeText={(name) => this.handleSubmitValue(name, 'name')} />
        <Text style={styles.text}>Phone Number</Text>
        <FormInput
          containerStyle={{ backgroundColor: 'white' }}
          id="phone"
          label="Phone Number"
          type="phonenumber"
          value={this.state.phone}
          onChangeText={(phone) => this.handleSubmitValue(phone, 'phone')} />
        <Text style={styles.text}>Email</Text>
        <FormInput
          containerStyle={{ backgroundColor: 'white' , marginBottom: 10}}
          id="email"
          label="Email Address"
          type="email"
          value={this.state.email}
          onChangeText={(email) => this.handleSubmitValue(email, 'email')} />
        <Button
          backgroundColor='#808080'
          color='white'
          large={true}
          rounded
          icon={{ name: 'check' }}
          onPress={() => {
            const values = {
              name: this.state.name,
              phone: this.state.phone,
              email: this.state.email
            }
            this.props.dispatch(editClient(this.props.authToken, values, this.props.clientId, this.props.currentUser.id))
            this.props.dispatch(toggleClient(''));
          }}
          title="Edit Client" />
          </View>
      </View>
    )
  }
}

const styles = {
  form: {
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 10,
    marginTop: 25
  },
  input: {
    padding: 3
  },
  text: {
    fontSize: 16,
    padding: 10,
    marginLeft: 5,
    color: 'white'
  }
}

const mapStateToProps = state => {
  return {
    authToken: state.auth.authToken,
    currentUser: state.auth.currentUser
  }
};

export default connect(mapStateToProps)(EditClientForm);