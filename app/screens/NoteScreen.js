import React, {useContext, useState} from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {ThemeContext} from '../contexts/ThemesContext';
import {LanguageContext} from "../contexts/Languages";
import AsyncStorage from "@react-native-community/async-storage";
import {SwipeListView} from "react-native-swipe-list-view";
import {Center} from "../components/Center";
import {Note} from "../components/Note";

// Obrazovka obsahující seznam všech poznámek a tlačítko pro přidání poznámky
// Nic zásadního se zde neděje
export default function NoteScreen({navigation}) {
    const {mainColor} = useContext(ThemeContext);
    const [notes, setNotes] = useState([]);
    const t = useContext(LanguageContext);

    AsyncStorage.getItem('notes')
        .then(value => {
            setNotes(JSON.parse(value));
        });

    if (notes == null || notes.length === 0) return (
        <React.Fragment>
            <Center>
                <Text style={style.center}>{t.notesNothing}</Text>
            </Center>
            <Button
                title={t.addNote}
                onPress={() => navigation.navigate('Add')}
                color={mainColor}
            />
        </React.Fragment>
    );
    else return (
        <React.Fragment>
            <Button title={'Log notes'} onPress={() => console.log(notes)}/>
            <SwipeListView
                data={notes}
                renderItem={({item}) => <Note t={t} item={item} navigation={navigation}/>}
            />
            <Button
                title={t.addNote}
                onPress={() => navigation.navigate('Add')}
                color={mainColor}
            />
        </React.Fragment>
    );
}

const style = StyleSheet.create({
    center: {
        textAlign: 'center',
    },
    line: {
        borderTopWidth: 2,
        borderColor: '#dcdcdc',
    },
    note: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-around',
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
    },
    unimportant: {
        fontSize: 12,
        fontStyle: 'italic',
    },
    noteText: {
        flex: 1,
        alignSelf: 'center',
        flexGrow: 1,
        flexShrink: 0,
        alignContent: 'stretch',
    },
    noteSettings: {
        alignSelf: 'flex-start',
        marginTop: 10,
        marginRight: 10,
    },
});

