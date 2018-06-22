import React from 'react';
import { connect } from 'react-redux';
import { toggleClient } from '../actions/clients';
import { Actions } from 'react-native-router-flux';
import HeaderMain from './HeaderMain';
import { addClient } from '../actions/appointment';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { View, TextInput, Text, Button } from 'react-native';

class AddClientForm extends React.Component {
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
            <HeaderMain />
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
                <Button
                onPress={() => {
                  const values = {
                    name: this.state.name,
                    phone: this.state.phone,
                    email: this.state.email
                  } 
                  this.props.dispatch(addClient(this.props.authToken, values, this.props.currentUser.id));
                  this.props.dispatch(toggleClient(''));
                  Actions.clients();
                }}
                title="Add"/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    authToken: state.auth.authToken,
    currentUser: state.auth.currentUser
}};

export default connect(mapStateToProps)(AddClientForm);