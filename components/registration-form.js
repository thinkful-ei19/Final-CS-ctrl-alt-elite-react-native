import React from 'react';
import { registerUser } from '../actions/register';
import { login } from '../actions/auth';
import { connect } from 'react-redux';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import { FormLabel, FormInput } from 'react-native-elements';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


// import './registration-form.css';

const passwordLength = length({ min: 8, max: 72 });
const matchesPassword = matches('password');


export class RegistrationForm extends React.Component {
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
        this.props.dispatch(registerUser(username, password))
        .then(() => this.props.dispatch(login(username, password)))
    }

    render() {
        return (
            <View
                style={styles.form}
            >
                <FormLabel className="login-form__label" htmlFor="username">Username</FormLabel>
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
                <FormLabel className="login-form__label" htmlFor="password">Password</FormLabel>
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
                <TouchableOpacity onPress={() => this.handleSubmit(
                    this.state.username, this.state.password)}>
                    <Text
                        style={styles.submitButton}
                    >Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    form: {
        marginTop: 50,
    },
    textBox: {
        padding: 10,
        marginTop: 60,
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

export default connect(mapStateToProps)(RegistrationForm);
