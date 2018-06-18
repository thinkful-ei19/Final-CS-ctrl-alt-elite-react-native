import React from 'react';
import { Button, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import store from './store';


class LandingPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text id="app-name">SCHEDULR</Text>
            
                <Text id="app-description">A simple appointment scheduling app with automated notifications</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

class Login extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    LandingPage: LandingPage,
    Login: Login,
  },
  {
    initialRouteName: 'LandingPage',
  }
);

export default class App extends React.Component {
  render() {
    return 
    <Provider store={store}>
    <RootStack />
    </Provider>;
  }
}
