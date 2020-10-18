import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const CalendarContext = React.createContext({
    events: [],
    markedDates: {},
    setEvents: () => {

    },
    setMarkedDates: () => {
    },
});

export const Calendars = ({children}) => {
    const [events, setEvents] = useState([]);
    const [markedDates, setMarkedDates] = useState({});

    useEffect(() => {
        AsyncStorage.getItem('markedDates')
            .then(value => {
                if (JSON.parse(value)) {
                    setMarkedDates(JSON.parse(value));
                } else {
                    setMarkedDates({});
                }
            });
        AsyncStorage.getItem('events')
            .then(value => {
                if (JSON.parse(value)) {
                    setEvents(JSON.parse(value));
                } else {
                    setEvents([]);
                }
            });
    }, []);

    const setDates = date => {
        let objekt = markedDates;
        objekt[date.dateString] = {marked: true};
        setMarkedDates(objekt);
        AsyncStorage.setItem('markedDates', JSON.stringify(markedDates));
    };

    return (
        <CalendarContext.Provider value={{
            events: events,
            markedDates: markedDates,
            setEvents: event => {
                setDates(event);
                AsyncStorage.setItem('events', JSON.stringify([...events, event]));
            },
        }}>
            {children}
        </CalendarContext.Provider>
    );
};
