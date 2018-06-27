import React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import Logo from '../images/schedulrLogo2.png';

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
      <ImageBackground source={{ uri: 'https://s8.postimg.cc/7ye0x11hx/background.png' }} style={{ width: '100%', height: '100%' }}>
        <Image style={styles.logo} source={Logo} />
        <View style={styles.form}>
          <Text style={styles.text}>Username</Text>
          <FormInput
            autofocus={true}
            multiline={false}
            containerStyle={{ backgroundColor: 'white' }}
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
            maxLength={20}
            placeholder="Username"
            placeholderTextColor="#52658F"
          />
          <Text style={styles.text}>Password</Text>
          <FormInput
            autofocus={false}
            multiline={false}
            secureTextEntry={true}
            containerStyle={{ backgroundColor: 'white' }}
            onChangeText={(password) => this.setState({ password })}
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
      </ImageBackground>
    );
  }
}

const styles = {
  form: {
    flex: 1
  },
  text: {
    fontSize: 16,
    padding: 10,
    marginLeft: 5,
    color: 'white'
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#808080',
    padding: 10,
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 10,
    borderRadius: 25,
    height: 50,
    width: '90%'
  },
  logo: {
    marginTop: 15,
    marginLeft: 80,
    width: 200,
    height: 200,
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});


export default connect(mapStateToProps)(Login);
