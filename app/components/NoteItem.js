import React from 'react';
import {View, Text} from 'react-native';

//Komponent, který obsahuje informace o poznámce

//Argument je objekt, který přijde z NoteListu při generování
export default function NoteItem({object}) {
    const {id: id, title: title, text: text, dateAdded: dateAdded, isDone: isDone} = object;
    return (
        <View style={{
            backgroundColor: 'red',
            padding: 10,
            marginBottom: 5,
        }}>
            <Text>ID: {id}</Text>
            <Text>Date added: {dateAdded}</Text>
            <Text>Is it done: {isDone ? 'true' : 'false'}</Text>
            <Text>Title: {title}</Text>
            <Text>Text: {text}</Text>
        </View>
    );
}
