import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Icon, Header } from 'react-native-elements'
import { changeTab, derender } from '../actions/tabs';
import Logo from '../images/schedulrLogo2.png';

class HeaderMain extends React.Component {

    goBack() {
        const tab = this.props.selectedTab;
        console.log(tab)
        if (tab === 'clients' || tab === 'appointments' || tab === 'reports') {Actions.dashboard()}
        if (tab === 'editClient' || tab === 'deleteClient') {this.props.dispatch(derender()); this.props.dispatch(changeTab('clients'))}
    }

    render() {
        return (
            <Header
                outerContainerStyles={{ 
                    backgroundColor: 'black', 
                    height: 80
                }}
                innerContainerStyles={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 25
                }}
                centerComponent={<Image style={styles.logo} source={Logo} />}
                leftComponent={
                    <TouchableOpacity
                    onPress={() => this.goBack()}>
                        <Icon name="arrow-back" size={40} color='white'/>
                    </TouchableOpacity>
                }
                rightComponent={<TouchableOpacity
                    onPress={() => Actions.navigation()}
                >
                    <Icon 
                    name='menu'
                    size={40}
                    iconStyle={{
                        // marginTop: 10, 
                        // marginRight: 5, 
                        color: 'white'
                    }}
                     />
                </TouchableOpacity>}
            />
        )
    }
}

const mapStateToProps = state => ({
    selectedTab: state.tabsReducer.selectedTab
})

export default (connect(mapStateToProps)(HeaderMain))


const $white = '#fff';
const $black = '#000'

const $colorOne = '#D6EAF8';
const $colorTwo = $white;
const $colorThree = '#F4F4F4';
const $colorFour = '#373737';
const $colorFive = '#E5E8E8';

const styles = {
    container: {
        backgroundColor: $colorOne,
        // paddingBottom: 10,
        // paddingTop: 40,
        // paddingLeft: 10,
        // paddingRight: 150,
        // flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    messageImage: {
        // height: 50,
        // width: 50,
        tintColor: $black
    },
    menu: {
        color: $black,
        fontSize: 16,
    },
    header: {
        color: $black,
        // fontSize: 24,
        // marginLeft: 30
    },
    newMessage: {
        color: $black
    },
    logo: {
        position: 'relative',
        top: 15,
        width: 60,
        height: 60,
      }
};