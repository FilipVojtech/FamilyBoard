import React, {useContext, useState} from 'react';
import {CalendarContext} from '../components/CalendarContext';
import {Button, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ThemeContext} from '../components/ThemesContext';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function EventAddScreen({route, navigation}) {
    const {events, setEvents} = useContext(CalendarContext);
    const {mainColor} = useContext(ThemeContext);

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [whatSetting, setWhatSetting] = useState(date);

    const [title, setTitle] = useState('');
    const [isAllDay, setIsAllDay] = useState(false);
    const [date, setDate] = useState(new Date(route.params.timestamp));
    const [timeFrom, setTimeFrom] = useState(new Date(date));
    const [timeTo, setTimeTo] = useState(new Date(date));

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        if (whatSetting === timeFrom) {
            setTimeFrom(currentDate);
        } else if (whatSetting === timeTo) {
            setTimeTo(currentDate);
        } else {
            setDate(new Date(currentDate));
        }
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    //route.params. > (year | month | day | timestamp | dateString)
    return (
        <View>
            <View style={style.container}>
                <TextInput
                    style={[style.component, style.title]}
                    multiline
                    placeholder={'Bez názvu'}
                    onChangeText={string => setTitle(string)}
                    returnKeyType={'done'}
                    blurOnSubmit={true}
                    autoFocus={true}
                />
                <View style={style.component}>
                    <View style={style.viewRow}>
                        <Text style={style.uiText}>Celodenní</Text>
                        <Switch
                            value={isAllDay}
                            onValueChange={() => {
                                setIsAllDay(previousState => !previousState);
                            }}/>
                    </View>
                    <View style={style.viewRow}>
                        <TouchableOpacity onPress={() => {
                            setWhatSetting(date);
                            showDatepicker();
                        }}>
                            <Text style={style.uiText}>{date.toDateString()}</Text>
                        </TouchableOpacity>
                        <View style={[style.viewRow, isAllDay ? {display: 'none'} : {display: 'flex'}]}>
                            <TouchableOpacity onPress={() => {
                                setWhatSetting(timeFrom);
                                showTimepicker();
                            }}>
                                <Text
                                    style={style.uiText}
                                >
                                    Od {timeFrom.getHours() < 10 ? `0${timeFrom.getHours()}` : timeFrom.getHours()}:{timeFrom.getMinutes() < 10 ? `0${timeFrom.getMinutes()}` : timeFrom.getMinutes()}
                                </Text>
                            </TouchableOpacity>
                            <Text style={style.uiText}>-</Text>
                            <TouchableOpacity onPress={() => {
                                setWhatSetting(timeTo);
                                showTimepicker();
                            }}>
                                <Text
                                    style={style.uiText}
                                >
                                    Do {timeTo.getHours() < 10 ? `0${timeTo.getHours()}` : timeTo.getHours()}:{timeTo.getMinutes() < 10 ? `0${timeTo.getMinutes()}` : timeTo.getMinutes()}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {isAllDay || (timeFrom - timeTo < 0) ? null :
                        <Text style={[style.uiText, {textAlign: 'right'}]}>Událost nemůže začít po skončení</Text>}
                </View>
                {show && (
                    <DateTimePicker
                        value={whatSetting}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
                <View style={style.buttonArea}>
                    <Button
                        title={'Přidat novou událost'}
                        color={mainColor}
                        disabled={(title === '') || !((timeFrom - timeTo < 0) || isAllDay)}
                        onPress={() => {
                            {/**
                             Vyvoří poznámku jako objekt
                             Uloží seznam poznámek do Uložiště
                             Nakonec se vrátí na předchozí obrazovku
                             **/
                            }
                            console.log(events);
                            const createdEvent = new Event(events, title, date, isAllDay, timeFrom, timeTo, date.valueOf());
                            setEvents(createdEvent);
                            navigation.goBack();
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

class Event {
    constructor(events, title, date, isAllDay, from, to, timestamp) {
        this.id = (events == null || events.length === 0) ? 0 : events[events.length - 1].id + 1;
        this.title = title;
        this.isAllDay = isAllDay;
        this.from = `${from.getHours() < 10 ? `0${from.getHours()}` : from.getHours()}:${from.getMinutes() < 10 ? `0${from.getMinutes()}` : from.getMinutes()}`;
        this.to = `${to.getHours() < 10 ? `0${to.getHours()}` : to.getHours()}:${to.getMinutes() < 10 ? `0${to.getMinutes()}` : to.getMinutes()}`;
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        this.date = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        this.dateString = `${this.year}-${this.month}-${this.date}`;
        this.timestamp = timestamp;
    }
}

const style = StyleSheet.create({
    container: {},
    component: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: '#b8b8b8',
    },
    title: {
        fontSize: 20,
    },
    buttonArea: {},
    saveButton: {},
    viewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    uiText: {
        fontSize: 16,
        textAlignVertical: 'center',
        margin: 5,
    },
});
