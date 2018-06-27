import React from 'react';
import { Text, View, ScrollView, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import HeaderMain from './HeaderMain';
import { Grid, BarChart, YAxis } from 'react-native-svg-charts'
import moment from 'moment';
import * as scale from 'd3-scale';
import { changeTab } from '../actions/tabs';


class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            month: moment().format('MMM').toUpperCase()
        }
    }

    componentDidMount() {
        this.props.dispatch(changeTab('reports'))
      }

    handleMonthClick(value) {
        this.setState({
            month: value
        });
    }

    render() {
        if (this.props.currentUser) {
            let apptInfo = [];
            let janCount = 0;
            let febCount = 0;
            let marCount = 0;
            let aprCount = 0;
            let mayCount = 0;
            let juneCount = 0;
            let julyCount = 0;
            let augCount = 0;
            let septCount = 0;
            let octCount = 0;
            let novCount = 0;
            let decCount = 0;
    
            const totalAppointmentsForUser = this.props.currentUser.appointments.length;
    
               const filterAppts = this.props.currentUser.appointments.map((appointment) => {
               const formatTime = moment(appointment.time).format('MMMM Do YYYY');
               if (formatTime.includes('January')) {
                    janCount ++;
               } if (formatTime.includes('February')) {
                    febCount ++;
               } if (formatTime.includes('March')) {
                    marCount ++;
                } if (formatTime.includes('April')) {
                    aprCount ++;
                } if (formatTime.includes('May')) {
                    mayCount ++;
                } if (formatTime.includes('June')) {
                    juneCount ++;
                } if (formatTime.includes('July')) {
                    julyCount ++;
                } if (formatTime.includes('August')) {
                    augCount ++;
                } if (formatTime.includes('September')) {
                    septCount ++;
                } if (formatTime.includes('October')) {
                    octCount ++;
                } if (formatTime.includes('November')) {
                    novCount ++;
                } if (formatTime.includes('December')) {
                    decCount ++;
                }           
           });
    
           const data = [
            {
                value: janCount,
                label: 'JAN',
            },
            {
                value: febCount,
                label: 'FEB',
            },
            {
                value: marCount,
                label: 'MAR',
            },
            {
                value: aprCount,
                label: 'APR',
            },
            {
                value: mayCount,
                label: 'MAY',
            },
            {
                value: juneCount,
                label: 'JUN',
            },
            {
                value: julyCount,
                label: 'JUL',
            },
            {
                value: augCount,
                label: 'AUG',
            },
            {
                value: septCount,
                label: 'SEP',
            },
            {
                value: octCount,
                label: 'OCT',
            },
            {
                value: novCount,
                label: 'NOV',
            },
            {
                value: decCount,
                label: 'DEC',
            },
        ];
    
            const keys   = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    
            const svgs = [
                            { onPress: () => console.log('JAN') },
                            { onPress: () => console.log('FEB') },
                            { onPress: () => console.log('MAR') },
                            { onPress: () => console.log('APR') },
                            { onPress: () => console.log('MAY') },
                            { onPress: () => console.log('JUN') },
                            { onPress: () => console.log('JUL') },
                            { onPress: () => console.log('AUG') },
                            { onPress: () => console.log('SEP') },
                            { onPress: () => console.log('OCT') },
                            { onPress: () => console.log('NOV') },
                            { onPress: () => console.log('DEC') }
                        ];
            
            const mapData = data.map((value, index) => ({
                value: value.value,
                svg: {
                    onPress: () => this.handleMonthClick(value.label)
                },
                key: `pie-${index}`,
                label: value.label,
                fill: 'rgba(134, 65, 244, 0.8)'
            }))
    
            const currentYear = moment().format('YYYY');
            const filterApptList = this.props.currentUser.appointments.map((appointment) => {
                const formatTime = moment(appointment.time).format('MMM').toUpperCase();
                const arrayOfTime = formatTime.split(' ');
                
                if(arrayOfTime[0] === this.state.month) {
                    apptInfo.push(appointment);
                }
               });
    
               const sortedList = apptInfo.sort((a,b) => {
                return moment(a.time).valueOf() - moment(b.time).valueOf()
             });
    
    
             const apptDataList = sortedList.map((appt) => {
                return (
                     <View className="report__list-block" key={appt.id}>
                         <View>
                             <Text className="report__list-item__time">{moment(appt.time).format('MMMM Do YYYY')}</Text>
                             <Text className="report__list-item__name">{appt.client.name}</Text>
                             <Text className="report__list-item__email">{appt.client.email}</Text>
                             <Text className="report__list-item__phone">{appt.client.phone}</Text>
                         </View>
                     </View>
                );
            });
    
            const apptPercentage = Math.floor((apptInfo.length / totalAppointmentsForUser) * 100);
    
            return (
                <ImageBackground source={{ uri: 'https://s8.postimg.cc/d68asvp45/jess-watters-553319-unsplash.jpg' }} style={{ width: '100%', height: '100%' }}>
                    <HeaderMain />
                    <Text>Current Year: {currentYear}</Text>
                <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
                <YAxis
                    data={data}
                    yAccessor={({ index }) => index}
                    scale={scale.scaleBand}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    formatLabel={(_, index) => data[ index ].label}
                />
                <BarChart
                    style={{ flex: 1, margin: 10, padding: 10, backgroundColor: 'white'}}
                    data={mapData}
                    keys={ keys }
                    horizontal={true}
                    yAccessor={({ item }) => item.value}
                    svg={{ 
                        fill: 'rgba(134, 65, 244, 0.8)',
                        onPress: (e) => console.log('press', e)
                    }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    gridMin={0}
                    svgs={ svgs }>
                    <Grid direction={Grid.Direction.VERTICAL}/>
                </BarChart>
            </View>
            <View>
                 <ScrollView>
                    <Text>Appointment History for the month of {this.state.month}</Text>
                    <Text>{apptPercentage}% of your appointments were during {this.state.month}</Text>
                    {apptDataList}
                </ScrollView>
            </View>
            </ImageBackground>
            );
        } else {
            return (
                <View>
                    <Text>Unable to render</Text>
                </View>
            )
        }
        
    }
}


const mapStateToProps = state => {
   
    return {
        authToken: state.auth.authToken,
        currentUser: state.auth.currentUser,
        selectedDate: state.calendarReducer.selectedDate,
    }
};


export default connect(mapStateToProps)(Reports);