import React from 'react';
import { connect } from 'react-redux';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class LandingPage extends React.Component {

  componentDidMount() {
    if (this.props.hasAuthToken) {
      Actions.dashboard();
    }
  }

  render() {
    return (
      <View style={styles.landing}>
        <Text id="app-name" style={styles.title}>SCHEDULR</Text>
        <Text id="app-description" style={styles.text}>Keep track of your appointments on the go with this quick and simple automated notification scheduling app.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Actions.login()}
        >
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
          onPress={() => Actions.register()}
        >
        <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  landing: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 25,
  },
  text: {
    fontSize: 20,
    width: '80%',
    margin: 20
  },
  buttonText: {
    fontSize: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#D6EAF8',
    padding: 10,
    marginBottom: 10,
    borderRadius: 25,
    height: 50,
    width: '35%'
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default connect(mapStateToProps)(LandingPage);
