import React from 'react';
import {connect} from 'react-redux';
import { Text, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native';
import HeaderMain from './HeaderMain';
// import ConfirmDelete from './ConfirmDelete';
import EditForm from './EditForm';
import {deleteAppointment} from '../actions/appointment';
import moment from 'moment';
import { Icon } from 'react-native-elements'
import { changeTab, derender } from '../actions/tabs';


class ScheduleList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      deleteThis: '',
      editThis: ''
    }
  }

  componentDidMount() {
    this.props.dispatch(changeTab('appointments'))
    if (this.props.derender === true) {
      this.props.dispatch(derender())
      this.setState({deletethis: '', editThis: ''})
    }
  }

  render() {
    let buildList;
    try {    
      let appointments;
      if (this.props.selectedAppointment !== null && this.props.calendar === 'weekly') {
        appointments = [this.props.selectedAppointment];
      } else {
        appointments = this.props.currentUser.appointments.filter((apt) => {
          if (moment(apt.time).format('YYYY MM DD') === moment(this.props.selectedDate).format('YYYY MM DD')) {
            return apt;
          }
        });
      }

      buildList = appointments.map((apt) => {
        if (apt.id === this.state.editThis) {
          return (
            <View key={apt.id}>
            <View style={styles.block} >
              <View>
                  <Text className="appointments__list__item">{moment(apt.time).format('MMMM Do YYYY, h:mm A')}</Text>              
                  <Text className="appointments__list__item">{apt.client.name}</Text>
                  <Text className="appointments__list__item">{apt.client.phone}</Text>
                  <Text className="appointments__list__item">{apt.client.email}</Text>
                  <Text className="appointments__list__item">{apt.notes}</Text>
              </View>
          </View>
              <EditForm aptId={apt.id} />
          </View>
          )
        }
        if (apt.id === this.state.deleteThis) {
          return (
            <View style={styles.block} key={apt.id}>
              <View>
                  <Text className="appointments__list__item">{moment(apt.time).format('MMMM Do YYYY, h:mm A')}</Text>              
                  <Text className="appointments__list__item">{apt.client.name}</Text>
                  <Text className="appointments__list__item">{apt.client.phone}</Text>
                  <Text className="appointments__list__item">{apt.client.email}</Text>
                  <Text className="appointments__list__item">{apt.notes}</Text>
              </View>
              <Text style={styles.buttonText}>Delete Permanently?</Text>
              <TouchableOpacity style={styles.editButton}
                onPress={() => {
                  this.props.dispatch(deleteAppointment(this.props.authToken, apt.id, this.props.currentUser.id))
                }}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.editButton}
                onPress={() => {
                  this.setState({
                    deleteThis: ''
                  })
                }}
              >
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
          </View>
          )
        }
        return (
          <View style={styles.block} key={apt.id}>
            <View>
                <Text className="appointments__list__item">{moment(apt.time).format('MMMM Do YYYY, h:mm A')}</Text>              
                <Text className="appointments__list__item">{apt.client.name}</Text>
                <Text className="appointments__list__item">{apt.client.phone}</Text>
                <Text className="appointments__list__item">{apt.client.email}</Text>
                <Text className="appointments__list__item">{apt.notes}</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '20%'}}>
              <TouchableOpacity style={styles.editButton}
                onPress={() => {
                  this.setState({
                    editThis: apt.id
                  })
                }}
              >
                <Icon name='edit' />
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                this.setState({
                  deleteThis: apt.id
                })
              }}
              style={styles.editButton}>
                <Icon name='delete' />
              </TouchableOpacity>
            </View>
          </View>
        )
      })
      return (
        <ImageBackground source={{ uri: 'https://s8.postimg.cc/r0k2y9x2d/nathan-dumlao-532282-unsplash_2.jpg' }} style={{ width: '100%', height: '100%' }}>

        <View style={styles.main}>
          <HeaderMain/>
          <ScrollView component="nav" className="appointments__schedule-list">
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={150} enabled>
            {buildList}
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
        </ImageBackground>

      );
    } catch(err){
      return (
        <View >
          <HeaderMain/>
          <View component="nav">
            <Text>No Appointments to show</Text>
          </View>
        </View>
      );
    }
  }
    
}

const styles = {
  main: {
    paddingBottom: 100,
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
  editButton: {
    marginTop: 5,
    marginBottom: 5,
  },
  deleteButton: {
    marginTop: 5,
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 16,
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken,
  currentUser: state.auth.currentUser,
  selectedDate: state.calendarReducer.selectedDate,
  calendar: state.calendarReducer.calendar,
  derender: state.tabsReducer.derender
});

export default connect(mapStateToProps)(ScheduleList);
