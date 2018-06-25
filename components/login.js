import React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: 'cjszk',
        password: 'chrischris'
      }
    }

    componentDidMount() {
        if (this.props.loggedIn) {
            Actions.dashboard()
        }
    }

    handleSubmit = (username, password) => {
      this.props.dispatch(login(username, password))
    }
  
    render() {
      return (
        <View style={styles.form}>
          <FormLabel>Username</FormLabel>
          <FormInput
            autofocus={true}
            multiline={false}
            style={styles.textBox}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            maxLength={20}
            placeholder="Username"
            placeholderTextColor="#52658F"
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            autofocus={false}
            multiline={false}
            secureTextEntry={true}
            style={styles.textBox}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            maxLength={20}
            placeholder="Password"
            placeholderTextColor="#52658F"
          />
          <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleSubmit(this.state.username, this.state.password)}>
              <Text style={styles.buttonText}
              >Submit</Text>
          </TouchableOpacity>
        </View>
      );
    }
}
  
const styles = {
form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
textBox: {
    padding: 10,
    marginTop: 60,
    width: '100%'
},
buttonText: {
  fontSize: 20
},
button: {
  alignItems: 'center',
  backgroundColor: '#D6EAF8',
  padding: 10,
  marginTop: 10,
  marginBottom: 10,
  borderRadius: 25,
  height: 50,
  width: '35%'
}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});


export default connect(mapStateToProps)(Login);
