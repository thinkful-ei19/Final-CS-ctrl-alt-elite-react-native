import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { clearAuthToken } from '../local-storage';
import { toggleClient } from '../actions/clients';
import { clearAuth } from '../actions/auth';
import { Icon } from 'react-native-elements'


class Navigation extends React.Component {

    render() {
        return (
            <ImageBackground source={{ uri: 'https://s8.postimg.cc/7ye0x11hx/background.png' }} style={{ width: '100%', height: '100%' }}>
            <View style={styles.main}>
                <TouchableOpacity
                    onPress={() => Actions.dashboard()}
                >
                    <Icon name="home" color='white'/>
                    <Text style={styles.buttonText}>HOME</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                onPress={() => {
                    this.props.dispatch(toggleClient(''));
                    Actions.clients()}}
                >
                    <Icon name="people" color='white'/>
                    <Text style={styles.buttonText}>CLIENTS</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => Actions.reports()}
                >
                    <Icon name="timeline" color='white'/>
                    <Text style={styles.buttonText}>REPORTS</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        Actions.landingPage()
                        this.props.dispatch(clearAuth())
                }}
                >
                    <Icon name="clear" color='white'/>
                    <Text style={styles.buttonText}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => ({

})

export default (connect(mapStateToProps)(Navigation))


const $white = '#fff';
const $black = '#000'

const $colorOne = '#D6EAF8';
const $colorTwo = $white;
const $colorThree = '#F4F4F4';
const $colorFour = '#373737';
const $colorFive = '#E5E8E8';

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
        paddingTop: 160,
        paddingBottom: 160,

    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 24,
        color: $white
    }
}