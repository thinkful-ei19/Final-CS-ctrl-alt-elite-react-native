import React from 'react';
import {connect} from 'react-redux';
import { View, TextInput, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import EditClientForm from './EditClientForm';
// import { editClientRequest } from '../actions/clients';


// import ConfirmClientDelete from './ConfirmClientDelete';


// import requiresLogin from './requires-login';

class ClientsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          deleteThis: '',
          editThis: ''
        }
      }

    //   resetList() {
    //         this.setState({
    //             editThis: ''
    //         });
    // }

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
                                    // dispatch(editClientRequest(client.id))
                                   this.setState({
                                   editThis: client.id
                                   });
                               }}>
                           <Text>Edit</Text>
                           </TouchableOpacity>
                            {/* <EditClientForm clientInfo={client} clientId={client.id}/>
                            <ConfirmClientDelete clientId={client.id} /> */}
                        </View>
                   )
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
                    )
                  } 
         }); 
            return (
                <View className="client-list">
                    <Text>
                        {clientList}
                    </Text>
                </View>
            )
        } catch(err) {
            console.log(err);
        }
   
    }
}

export default connect()(ClientsList);

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

//   const mapStateToProps = (state) => {
//       console.log('STATE', state);
//     return {
//       authToken: state.auth.authToken,
//       currentUser: state.auth.currentUser,
//       editThis: state.clientReducer.editThis
//     }
//   };
  
//   export default connect(mapStateToProps)(ClientsList);