import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Button } from 'react-native-paper';
import HeaderStatus from './HeaderStatus';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const ScheduleAppointment = () => {
    const [selectedDates, setSelectedDates] = useState({});
    const [selectedDate,setSelectedDate]=useState(null);
    const handleDayPress = (day) => {
        const newSelectedDates = { ...selectedDates };

        if (newSelectedDates[day.dateString]) {
            // Deselect the date if already selected
            delete newSelectedDates[day.dateString];
        } else {
            
            newSelectedDates[day.dateString] = {
                selected: true,
                selectedColor: '#FF6B6B',
                customStyles: {
                    container: {
                        borderRadius: 5,  // Change border radius to 5
                    },
                    text: {
                        color: 'white',
                    }
                }
            };
        }

        setSelectedDates(newSelectedDates);
    };
    const [selectedTime, setSelectedTime] = useState(null);
    const [timePeriod, setTimePeriod] = useState('Afternoon');

    const timeSlots = {
        Morning: ['08:00', '09:00', '10:00'],
        Afternoon: ['1:00', '2:00', '3:00'],
        Evening: ['17:00', '18:00', '19:00']
    };
    const router= useRouter();

    return (
        <View style={styles.container}>
            {/* Header */}
            <HeaderStatus title={"Schedule an appointment"} onBackPress={()=>{router.back()}}/>

            {/* Calendar */}
            <Text style={styles.label}>Choose a date</Text>
            <Calendar
                current={'2025-04-01'}
                minDate={'2025-04-01'}
                maxDate={'2025-04-30'}
                onDayPress={handleDayPress}
                markedDates={selectedDates}
                markingType={'custom'} // Required for custom styles
                theme={{
                    todayTextColor: '#FF6B6B',
                    arrowColor: '#FF6B6B',
                }}
            />

            {/* Time Selection */}
            <Text style={styles.label}>Choose time</Text>
            <View style={styles.timePeriods}>
                {['Morning', 'Afternoon', 'Evening'].map((period) => (
                    <TouchableOpacity
                        key={period}
                        style={[styles.periodButton, timePeriod === period && styles.selectedPeriod]}
                        onPress={() => setTimePeriod(period)}
                    >
                        <Text style={[styles.periodText, timePeriod === period && styles.selectedPeriodText]}>
                            {period}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.timeSlots}>
                {timeSlots[timePeriod].map((time) => (
                    <TouchableOpacity
                        key={time}
                        style={[styles.timeButton, selectedTime === time && styles.selectedTime]}
                        onPress={() => setSelectedTime(time)}
                    >
                        <Text style={[styles.timeText, selectedTime === time && styles.selectedTimeText]}>
                            {time}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Continue Button */}
            <TouchableOpacity
                style={styles.continueButton}
                onPress={() => console.log('Proceeding with:', selectedDate, selectedTime)}
                disabled={!selectedDate || !selectedTime}
            >
               <Text style={{color:'white',fontFamily:"Poppins"}}>Continue</Text><MaterialIcons name='arrow-forward' size={20} color={"white"}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 18,
        fontFamily:'Poppins',
        margin: 10,
        color: '#333',
    },
    timePeriods: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal:20
    },
    periodButton: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#F16D6D',
    },
    selectedPeriod: {
        backgroundColor: '#F16D6D',
    },
    periodText: {
        color: '#FF6B6B',
        fontFamily:"Nunito",
        fontWeight:'500'
    },
    selectedPeriodText: {
        color: '#fff',
    },
    timeSlots: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal:10,
        marginBottom: 20,
    },
    timeButton: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FF6B6B',
        margin: 5,
        minWidth: 90,
        alignItems: 'center',
    },
    selectedTime: {
        backgroundColor: '#FF6B6B',
        fontFamily:"Nunito"
    },
    timeText: {
        color: '#FF6B6B',
        fontFamily:"Nunito"
    },
    selectedTimeText: {
        color: '#fff',
    },
    continueButton: {
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"space-between",
        backgroundColor: '#F16D6D',
        padding: 10,
        borderRadius: 30,
        width:"90%",
        alignSelf:"center"
    },
});

export default ScheduleAppointment;
