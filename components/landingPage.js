import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Button, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../images/schedulrLogo.png';

class LandingPage extends React.Component {

    componentDidMount() {
      if (this.props.hasAuthToken) {
        Actions.dashboard();
      }
    }

    render() {
      return (
        <View style={styles.container}>
        <Image style={styles.logo} source={Logo} />
          {/* <Text id="app-name">SCHEDULR</Text> */}
          {/* <Text id="app-description">Keep track of your appointments on the go with this quick and simple automated notification scheduling app.</Text> */}
          <Button
            title="Login"
            onPress={() => Actions.login()}
          />
          <Button 
            title="Register"
            onPress={() => Actions.register()} 
          />
        </View>
      );
    }
  }

  const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default connect(mapStateToProps)(LandingPage);

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  logo:{
    width:350, 
    height:350,
  }
})