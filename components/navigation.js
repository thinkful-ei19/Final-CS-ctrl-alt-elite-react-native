import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { clearAuthToken } from '../local-storage';
import { removeToken } from '../actions/auth';

class Navigation extends React.Component {

    render() {
        return (
            <View style={styles.main}>
                <TouchableOpacity
                onPress={() => Actions.dashboard()}
                >
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
                    // this.props.dispatch(clearAuthToken())
                    // Actions.login()
                    // this.props.dispatch(removeToken())
                }}
                >
                    <Text style={styles.buttonText}>Log Out</Text>
                </TouchableOpacity>
            </View>
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
        backgroundColor: $colorOne,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 24
    }
}