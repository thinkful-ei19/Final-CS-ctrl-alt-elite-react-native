import React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
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
        <View style={{}}>
          <TextInput
            autofocus={true}
            multiline={false}
            style={styles.textBox}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            maxLength={20}
            placeholder="Username"
            placeholderTextColor="#52658F"
          />
          <TextInput
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
          <TouchableOpacity onPress={() => this.handleSubmit(this.state.username, this.state.password)}>
              <Text
              style={styles.submitButton}
              >Submit</Text>
          </TouchableOpacity>
        </View>
      );
    }
}
  
const styles = {
textBox: {
    padding: 10,
    marginTop: 40,
    width: '100%'
},
submitButton: {
    padding: 10,
    width: '100%'
}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});


export default connect(mapStateToProps)(Login);
