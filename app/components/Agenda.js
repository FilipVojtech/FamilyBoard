import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CalendarContext} from './CalendarContext';

export default function Agenda(props) {
    const {events} = useContext(CalendarContext);

    // item. > (title | isAllDay | year | month | date | dateString)
    // props.item. > (id | title | isAllDay | year | month | date | dateString | timestamp)
    return (
        <View style={style.container}>
            <Text
                style={[
                    style.unimportant,
                    {textAlign: 'center'},
                ]}
            >
                {new Date(props.selectedDay).getDate()}.{new Date(props.selectedDay).getMonth() + 1}. {new Date(props.selectedDay).getFullYear()}
            </Text>
            <FlatList
                data={events}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    <View>
                        {(props.selectedDay - item.timestamp) === 0 ? <Event item={item}/> : null}
                    </View>
                )}
            />
        </View>
    );
}

const Event = (props) => (
    <View style={style.agendaItem}>
        <Text style={[style.uiText, style.title]}>{props.item.title}</Text>
        <Text style={style.uiText}>{props.item.isAllDay ? 'Celodenní' : `${props.item.from} - ${props.item.to}`}</Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        paddingVertical: 2,
    },
    agendaItem: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#dcdcdc',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 2,
    },
    uiText: {
        fontSize: 16,
        textAlignVertical: 'center',
        margin: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    unimportant: {
        fontSize: 12,
        fontStyle: 'italic',
    },
});
