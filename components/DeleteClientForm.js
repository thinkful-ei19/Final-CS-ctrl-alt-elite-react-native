import React from 'react';
import { connect } from 'react-redux';
import { deleteClient } from '../actions/clients';
import { toggleClient } from '../actions/clients';
import { View, Text, TouchableOpacity } from 'react-native';

class DeleteClientForm extends React.Component {
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
                <Text>Delete Permanently?</Text>
                <TouchableOpacity style={styles.editButton}
                    onPress={() => {
                        this.props.dispatch(deleteClient(this.props.authToken, this.props.clientId, this.props.currentUser.id))
                        this.props.dispatch(toggleClient(''));
                    }}>
                    <Text>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editButton}
                    onPress={() => {
                        this.props.dispatch(toggleClient(''));
                    }}>
                    <Text>No</Text>
                </TouchableOpacity>
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
    editButton: {
        marginTop: 5,
        marginBottom: 5,
    },
    deleteButton: {
        marginTop: 5,
        marginBottom: 5,
    }
}