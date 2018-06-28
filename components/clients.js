import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import HeaderMain from './HeaderMain';
import FilterClients from './filter-clients';
import EditClientForm from './EditClientForm';
import DeleteClientForm from './DeleteClientForm';
import { changeTab, derender } from '../actions/tabs';
import { toggleClient } from '../actions/clients';


class Clients extends React.Component {

    componentDidMount() {
        this.props.dispatch(changeTab('clients'))
      }

    render() {
        console.log('hitting clients page');
        console.log('PROPS', this.props);
        if (this.props.currentUser) {
            if (this.props.derender === true) {
                this.props.dispatch(derender())
                this.props.dispatch(toggleClient(''))
            }
            if(this.props.toggle === '') {
                return (
                    <View style={{flex: 1}}>
                        <HeaderMain/>
                        <ScrollView contentContainerStyle={{flexGrow: 1}}>
                            <TouchableOpacity
                                style={styles.button} 
                                onPress={() => Actions.addClient()}
                                >
                                <Text style={styles.buttonText}>Add Client</Text>
                            </TouchableOpacity>
                            <FilterClients user={this.props.currentUser} /> 
                        </ScrollView>
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
                        <DeleteClientForm clientId={this.props.deleteThis}/>
                    </View>
                );
            }
        } else {
            return (
                <View>
                    <Text>Unable to render.</Text>
                </View>
            )
        }
        
    }
}

const styles = {
    buttonText: {
        fontSize: 20,
        color: 'white'
      },
    button: {
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
        marginTop: 10,
        // marginLeft: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        borderRadius: 25,
        height: 50,
        width: '90%'
      }
}

const mapStateToProps = state => {
    return {
      authToken: state.auth.authToken,
      currentUser: state.auth.currentUser,
      toggle: state.clientsReducer.toggle,
      editThis: state.clientsReducer.editThis,
      deleteThis: state.clientsReducer.deleteThis,
      derender: state.tabsReducer.derender
  }
};
  
  export default connect(mapStateToProps)(Clients);
