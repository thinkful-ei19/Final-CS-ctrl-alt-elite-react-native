import React from 'react';
import { connect } from 'react-redux';
import { deleteClient } from '../actions/clients';
import { toggleClient } from '../actions/clients';
import { View, Text, TouchableOpacity } from 'react-native';
import { changeTab } from '../actions/tabs';


class DeleteClientForm extends React.Component {

    componentDidMount() {
        this.props.dispatch(changeTab('deleteClient'))
      }

    render() {
        const findClient = this.props.currentUser.clients.find((client) => {
            return (
                client.id === this.props.clientId
            );
        });
        return (
            <View> 
                <View>
                    <Text>{findClient.name}</Text>
                    <Text>{findClient.phone}</Text>
                    <Text>{findClient.email}</Text>
                </View>
                <View style={styles.form}>
                <Text style={styles.text}>Delete Permanently?</Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        this.props.dispatch(deleteClient(this.props.authToken, this.props.clientId, this.props.currentUser.id))
                        this.props.dispatch(toggleClient(''));
                    }}>
                    <Text style={styles.buttonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        this.props.dispatch(toggleClient(''));
                    }}>
                    <Text style={styles.buttonText}>No</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
        }
    }

    
const mapStateToProps = state => {
    return {
      authToken: state.auth.authToken,
      currentUser: state.auth.currentUser,
      toggle: state.clientsReducer.toggle,
      editThis: state.clientsReducer.editThis,
      deleteThis: state.clientsReducer.deleteThis
  }
};
  
  export default connect(mapStateToProps)(DeleteClientForm);

  const styles = {
    main: {
        paddingBottom: 100
    },
    block: {
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
    },
    form: {
        justifyContent: 'center',
        backgroundColor: 'black'
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
      }
}