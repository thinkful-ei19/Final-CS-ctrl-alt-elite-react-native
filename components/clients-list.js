import React from 'react';
import {connect} from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import EditClientForm from './EditClientForm';
import { deleteClient } from '../actions/clients';


class ClientsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          deleteThis: '',
          editThis: ''
        }
      }

    render() {
       let clientList;
        
        const sortFunction = (a, b) => {
            if (a.name < b.name) {
                return -1;
            } if (a.name > b.name) {
                return 1;
            }
            return 0;
        }

        try {
            const sortedClientList = this.props.filteredList.sort(sortFunction);
            clientList = sortedClientList.map((client) => {
                if (this.state.editThis === '' && this.state.deleteThis === '') {
                    return (
                        <View key={client.id} style={styles.main}>
                            <Text>Name {client.name}</Text> 
                            <Text>Phone {client.phone}</Text> 
                            <Text>Email {client.email}</Text> 
                            <TouchableOpacity style={styles.editButton}
                               onPress={() => {
                                   this.setState({
                                   editThis: client.id
                                   });
                               }}>
                           <Text>Edit</Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={styles.deleteButton}
                               onPress={() => {
                                   this.setState({
                                   deleteThis: client.id
                                   });
                               }}>
                           <Text>Delete</Text>
                           </TouchableOpacity>
                        </View>
                   );
                }
                if (client.id === this.state.editThis) {
                    return (
                      <View key={client.id}>
                      <View style={styles.main} >
                        <View>
                            <Text>{client.name}</Text>
                            <Text>{client.phone}</Text>
                            <Text>{client.email}</Text>
                        </View>
                    </View>
                        <EditClientForm clientId={client.id} user={this.props.user} />
                    </View>
                    );
                  } 
                  if (client.id === this.state.deleteThis) {
                    return (
                      <View key={client.id}>
                        <View>
                        <Text>{client.name}</Text>
                            <Text>{client.phone}</Text>
                            <Text>{client.email}</Text>
                        </View>
                        <Text>Delete Permanently?</Text>
                        <TouchableOpacity style={styles.editButton}
                          onPress={() => {
                            this.props.dispatch(deleteClient(this.props.authToken, client.id, this.props.currentUser.id))
                          }}
                        >
                          <Text>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.editButton}
                          onPress={() => {
                            this.setState({
                              deleteThis: ''
                            });
                          }}
                        >
                          <Text>No</Text>
                        </TouchableOpacity>
                    </View>
                    )
                  }
         }); 
            return (
                <View className="client-list">
                    <Text>
                        {clientList}
                    </Text>
                </View>
            );
        } catch(err) {
            console.log(err);
        }
    }
}

const mapStateToProps = state => {
    return {
      authToken: state.auth.authToken,
      currentUser: state.auth.currentUser
    }
  };

export default connect(mapStateToProps)(ClientsList);

const styles = {
    main: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column'
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