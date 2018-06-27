import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../images/schedulrLogo2.png';
import Background from '../images/Background.png';
import { autoLogin } from '../actions/tabs';
import { clearAuth } from '../actions/auth';

class LandingPage extends React.Component {

  componentDidMount() {
    if (this.props.hasAuthToken === true && this.props.autoLogin === false) {
      Actions.dashboard();
      this.props.dispatch(autoLogin())
    }
  }

  render() {
    return (
      <ImageBackground source={{ uri: 'https://s8.postimg.cc/7ye0x11hx/background.png' }} style={{ width: '100%', height: '100%' }}>

        <Image style={styles.logo} source={Logo} />
        <View >
        <Text style={styles.desc}>Keep track of your appointments on the go with this quick and simple automated notification scheduling app.</Text>

          {/* <Text id="app-name">SCHEDULR</Text> */}
          <TouchableOpacity
          style={styles.button1}
            onPress={() => Actions.login()}
          >
          <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => Actions.register()}
          >
          <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}


const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
  autoLogin: state.tabsReducer.autoLogin
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default connect(mapStateToProps)(LandingPage);

const styles = StyleSheet.create({
  logo: {
    marginTop: 15,
    marginLeft: 80,
    width: 200,
    height: 200,
  },
  desc: {
    color: '#fefefe',
    width: '50%',
    fontSize: 16,
    top: 50,
    left: 10,
    position: 'absolute'
  },
  buttonText: {
    fontSize: 20,
    color: '#fefefe'
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#807c7b',
    padding: 10,
    borderRadius: 25,
    height: 50,
    width: '35%',
    position: 'absolute',
    top: 280,
    left: 10
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#807c7b',
    padding: 10,
    borderRadius: 25,
    height: 50,
    width: '45%',
    position: 'absolute',
    top: 340,
    left: 10
  }
})
