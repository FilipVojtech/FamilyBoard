import React, {useContext, useState} from 'react';
import {CalendarContext} from '../components/CalendarContext';
import {Button, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ThemeContext} from '../components/ThemesContext';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function EventAddScreen({route, navigation}) {
    const {setEvents} = useContext(CalendarContext);
    const {mainColor} = useContext(ThemeContext);

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [whatSetting, setWhatSetting] = useState('date');

    const [title, setTitle] = useState('');
    const [isAllDay, setIsAllDay] = useState(false);
    const [date, setDate] = useState(new Date(route.params.timestamp));
    const [timeFrom, setTimeFrom] = useState(new Date());
    const [timeTo, setTimeTo] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        if (whatSetting === 'timeFrom') {
            setTimeFrom(currentDate);
        } else if (whatSetting === 'timeTo') {
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
        setWhatSetting('date');
        showMode('date');
    };

    const showTimepicker = (whatSetting) => {
        setWhatSetting(whatSetting);
        showMode('time');
    };

    //route.params. > (year | month | day | timestamp | dateString)
    return (
        <View>
            <View style={style.container}>
                {/**
                 Textové pole pro zadání názvu
                 */}
                <TextInput
                    style={[style.component, style.title]}
                    multiline
                    placeholder={'Bez názvu'}
                    onChangeText={string => setTitle(string)}
                    returnKeyType={'done'}
                    blurOnSubmit={true}
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
                        <TouchableOpacity onPress={() => showDatepicker()}>
                            <Text style={style.uiText}>{date.toDateString()}</Text>
                        </TouchableOpacity>
                        <View style={[style.viewRow, isAllDay ? {display: 'none'} : {display: 'flex'}]}>
                            <TouchableOpacity onPress={() => showTimepicker('timeFrom')}>
                                <Text
                                    style={style.uiText}
                                >
                                    Od {timeFrom.getHours() < 10 ? `0${timeFrom.getHours()}` : timeFrom.getHours()}:{timeFrom.getMinutes() < 10 ? `0${timeFrom.getMinutes()}` : timeFrom.getMinutes()}
                                </Text>
                            </TouchableOpacity>
                            <Text style={style.uiText}>-</Text>
                            <TouchableOpacity onPress={() => showTimepicker('timeTo')}>
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
                        value={whatSetting === 'date' ? date : whatSetting === 'timeFrom' ? timeFrom : timeTo}
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
                            const createdEvent = new Event(title, date, isAllDay);
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
    constructor(title, date, isAllDay) {
        this.marked = true;
        this.title = title;
        this.isAllDay = isAllDay;
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        this.date = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        this.dateString = `${this.year}-${this.month}-${this.date}`;
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
