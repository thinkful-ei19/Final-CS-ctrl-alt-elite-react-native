import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Logo from '../images/schedulrLogo2.png';
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
        <View style={styles.container}>
        <Image style={styles.logo} source={Logo} />
          {/* <Text id="app-name">SCHEDULR</Text> */}
          
          <Button
            backgroundColor='#808080'
            color='white'
            rounded
            large={true}
            title="Login"
            onPress={() => Actions.login()}
          />
          <Button
            backgroundColor='#808080'
            color='white'
            rounded
            large={true} 
            title="Register"
            onPress={() => Actions.register()} 
          />
          <Text style={styles.desc}>Keep track of your appointments on the go with this quick and simple automated notification scheduling app.</Text>
        </View>
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
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  logo:{
    width:250, 
    height:250,
  },
  desc:{
    color: '#D6EAF8',
    textAlign: 'justify'
  }
})
