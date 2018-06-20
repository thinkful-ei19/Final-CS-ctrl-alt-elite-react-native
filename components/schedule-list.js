import React from 'react';
import {connect} from 'react-redux';
import { Text, FlatList, View } from 'react-native';
// import ConfirmDelete from './ConfirmDelete';
// import EditForm from './EditForm';
import moment from 'moment';

function ScheduleList(props) {
  console.log('scheduleList');
  let buildList;
  try {    
    let appointments;
    if (props.selectedAppointment !== null && props.calendar === 'weekly') {
      appointments = [props.selectedAppointment];
    } else {
      appointments = props.currentUser.appointments.filter((apt) => {
        if (moment(apt.time).format('YYYY MM DD') === moment(props.selectedDate).format('YYYY MM DD')) {
          return apt;
        }
      });
    }
    console.log(appointments)
    
    buildList = appointments.map((apt) => {
      return (
      <View key={apt.id} button>
        <Text
        primary={
          <View>
              <Text className="appointments__list__item">{moment(apt.time).format('MMMM Do YYYY, h:mm A')}</Text>              
              <Text className="appointments__list__item">{apt.client.name}</Text>              
              <Text className="appointments__list__item">{apt.client.phone}</Text>
              <Text className="appointments__list__item">{apt.client.email}</Text>
              <Text className="appointments__list__item">{apt.notes}</Text>
          </View>
        } />
        {/* <EditForm aptTime={moment(apt.time).format('YYYY MM DD HH mm')} aptInfo={apt} aptId={apt.id} />
        <ConfirmDelete aptId={apt.id} /> */}
      </View>
      )
    })
    return (
      <View >
        <View component="nav" className="appointments__schedule-list">
          {buildList}
        </View>
      </View>
    );
  } catch(err){
    return (
      <View >
        <View component="nav">
          <Text>No Appointments to show</Text>
        </View>
      </View>
    );
  }



}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  selectedDate: state.calendarReducer.selectedDate,
  selectedAppointment: state.appointmentReducer.selectedAppointment,
  calendar: state.calendarReducer.calendar
});

export default connect(mapStateToProps)(ScheduleList);
