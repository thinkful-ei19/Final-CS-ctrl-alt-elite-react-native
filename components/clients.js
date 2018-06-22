import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, View } from 'react-native';
import HeaderMain from './HeaderMain';
import FilterClients from './filter-clients';


class Clients extends React.Component {
    render() {
        return (
            <View>
                <HeaderMain/>
                <Button 
                    onPress={() => Actions.addClient()}
                    title="Add Client">
                </Button>
                <FilterClients user={this.props.currentUser} /> 
            </View>
        );
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
