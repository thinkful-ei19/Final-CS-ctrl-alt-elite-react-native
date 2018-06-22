import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, View, Text } from 'react-native';
import HeaderMain from './HeaderMain';
import FilterClients from './filter-clients';
import EditClientForm from './EditClientForm';


class Clients extends React.Component {
    render() {
        console.log('PROPS', this.props);
        if(this.props.toggle === '') {
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
        if (this.props.toggle === 'edit') {
            return (
                <View>
                    <HeaderMain/>
                    <EditClientForm clientId={this.props.editThis} user={this.props.currentUser} />
                </View>
            );
        }
        if (this.props.toggle === 'delete') {
            return (
                <View>
                    <HeaderMain/>
                </View>
            );
        }
    }
}

const mapStateToProps = state => {
    console.log('STATE', state);
    return {
      authToken: state.auth.authToken,
      currentUser: state.auth.currentUser,
      toggle: state.clientsReducer.toggle,
      editThis: state.clientsReducer.editThis,
      deleteThis: state.clientsReducer.deleteThis
  }
};
  
  export default connect(mapStateToProps)(Clients);
