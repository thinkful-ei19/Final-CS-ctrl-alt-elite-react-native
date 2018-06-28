import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
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
                                <Text style={styles.text}>{client.name}</Text>
                                <Text style={styles.text}>{client.phone}</Text>
                                <Text style={styles.text}>{client.email}</Text>
                            </View>
                            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '20%'}}>
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
                            <DeleteClientForm clientId={client.id} client={client} user={this.props.user} />
                        </View>
                    )
                }
            });
            return (
                <ImageBackground source={{ uri: 'https://s8.postimg.cc/r0k2y9x2d/nathan-dumlao-532282-unsplash_2.jpg' }} style={{ width: '100%', height: '100%' }}>
                    <View className="client-list">
                        {clientList}
                    </View>
                </ImageBackground>

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
        backgroundColor: 'rgba(255,255,255, 0.3)',
    },
    text: {
        fontSize: 18
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
