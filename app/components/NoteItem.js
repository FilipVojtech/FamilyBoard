import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

//Komponent, který obsahuje informace o poznámce

//Argument je objekt, který přijde z NoteListu při generování
export default function NoteItem({object}) {
    const {id: id, title: title, text: text, dateAdded: dateAdded, isDone: isDone} = object;
    return (
        <View style={style.note}>
            <View style={style.noteText}>
                <Text>Date added: {dateAdded}</Text>
                <Text>Is it done: {isDone ? 'true' : 'false'}</Text>
                <Text>Title: {title}</Text>
                <Text>Text: {text}</Text>
            </View>
            <View style={style.noteSettings}>
                <Button title='C'/>
                <Button title='E'/>
                <Button title='D'/>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    note: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-around',
        marginBottom: 5,
        borderWidth: 1,
        padding: 3,
        borderRadius: 10,

    },
    noteText: {
        flex: 1,
        alignSelf: 'center',
        flexGrow: 1,
        flexShrink: 0,
        alignContent: 'stretch',
    },
    noteSettings: {
        alignItems: 'stretch',
        alignSelf: 'flex-end',
        backgroundColor: 'violet',
    },
});
