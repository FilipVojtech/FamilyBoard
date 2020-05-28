import React, {useState} from 'react';

export const CalendarContext = React.createContext({
    events: {},
    markedDates: {},
    setEvents: () => {

    },
});

export const Calendars = ({children}) => {
    const [events, setEvents] = useState({
        '2020-05-01': {marked: true},
        '2020-05-02': {marked: true},
    });
    const [markedDates, setMarkedDates] = useState([
        {'2020-05-01': {marked: true}},
        {'2020-05-02': {marked: true}},
    ]);
    return (
        <CalendarContext.Provider value={{
            events: events,
            markedDates: markedDates,
            setEvents: event => {
                // console.log();
                // console.log(events);
                // console.log(event);
                // setEvents(events[event.dateString] = event);
                // console.log(events);
            },
        }}>
            {children}
        </CalendarContext.Provider>
    );
};
