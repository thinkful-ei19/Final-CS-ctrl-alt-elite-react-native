import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import EditClientForm from './EditClientForm';
import { deleteClient } from '../actions/clients';
import { toggleClient, getClientId, deleteClientId } from '../actions/clients';
import { Icon } from 'react-native-elements'
import DeleteClientForm from './DeleteClientForm';


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
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            } if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            return 0;
        }

        try {
            const sortedClientList = this.props.filteredList.sort(sortFunction);
            clientList = sortedClientList.map((client) => {
                if (this.state.editThis === '' && this.state.deleteThis === '') {
                    return (
                        <View key={client.id} style={styles.block}>
                            <View>
                                <Text>Name {client.name}</Text>
                                <Text>Phone {client.phone}</Text>
                                <Text>Email {client.email}</Text>
                            </View>
                            <TouchableOpacity style={styles.editButton}
                                onPress={() => {
                                    this.props.dispatch(getClientId(client.id));
                                    this.props.dispatch(toggleClient('edit'));
                                }}>
                                <Icon name='edit' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteButton}
                                onPress={() => {
                                    this.props.dispatch(deleteClientId(client.id));
                                    this.props.dispatch(toggleClient('delete'));
                                }}>
                                <Icon name='delete' />
                            </TouchableOpacity>
                        </View>
                    );
                }
                if (client.id === this.props.editThis) {
                    return (
                        <View key={client.id}>
                            <EditClientForm clientId={client.id} user={this.props.user} />
                        </View>
                    );
                }
                if (client.id === this.props.deleteThis) {
                    return (
                        <View key={client.id}>
                            <DeleteClientForm clientId={client.id} client={client} user={this.props.user}/>
                        </View>
                    )
                }
            });
            return (
                <View className="client-list">
                    {clientList}
                </View>
            );
        } catch (err) {
            console.log(err);
        }
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

export default connect(mapStateToProps)(ClientsList);

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
