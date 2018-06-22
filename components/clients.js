import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import HeaderMain from './HeaderMain';
import FilterClients from './filter-clients';

// import { Redirect } from 'react-router-dom';
// import AddClientForm from './AddClientForm';


// import requiresLogin from './requires-login';


class Clients extends React.Component {

    // componentDidMount() {
    //     if (this.props.selectedTab === 'dashboard') {
    //         return <Redirect to='/dashboard' />
    //     }
    // }

    render() {
        return (
            <View>
                <HeaderMain/>
                {/* <AddClientForm /> */}
                <Button 
                    onPress={() => Actions.addClient()}
                    title="Add Client">
                </Button>
                <FilterClients user={this.props.currentUser} /> 
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
      authToken: state.auth.authToken,
      currentUser: state.auth.currentUser,
      selectedDate : state.appointmentReducer.selectedDate,
      selectedTime: state.appointmentReducer.selectedTime
    }
  };
  
  export default connect(mapStateToProps)(Clients);
