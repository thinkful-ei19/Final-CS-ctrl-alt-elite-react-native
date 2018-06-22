import React from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import ClientsList from './clients-list';


export default class FilterClients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    onChange(text) {
         this.setState({
             input: text
         })
    }

    render() {
        const { inputStyle } = styles;
        const component = this;
        const clientFilter = this.props.user.clients.filter((client) => {
           if (client.name.slice(0, component.state.input.length).toLowerCase() === component.state.input.toLowerCase()) {
            return client;
           }
        })
        return (
            <View className="filter">
                    <View className="filter__input">
                        <TextInput 
                            type="text"
                            name="filter"
                            label="Client Filter"
                            id="filter"
                            placeholder="Filter by name"
                            onChangeText={(text) => {
                                this.onChange(text)
                            }}>
                        </TextInput>
                    </View>
                <ClientsList user={this.props.user} filteredList={clientFilter}/>
            </View>
        );
        } 
    }

    const styles = StyleSheet.create({
        viewStyle: {
            backgroundColor: '#eeeeee',
            flex: 1,
        }
    });
