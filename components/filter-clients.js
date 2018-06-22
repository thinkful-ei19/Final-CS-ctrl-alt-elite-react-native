import React from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import ClientsList from './clients-list';

// import IconButton from '@material-ui/core/IconButton';
// import SvgIcon from '@material-ui/core/SvgIcon';


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
                    {/* // className="filter-clients__form">
                    // <label className="filter-clients__label" htmlFor="filter"></label> */}
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
                    {/*                     
                    <button className="filter-button filter-clients__button"
                        disabled={this.props.pristine || this.props.submitting}>
                        Search
                    </button> */}
                <ClientsList user={this.props.user} filteredList={clientFilter}/>
            </View>
        );
        } 
    }

    const styles = StyleSheet.create({
        viewStyle: {
            backgroundColor: '#eeeeee',
            flex: 1,
        },
        inputStyle: {
            borderColor: 'black'
        }
    });
