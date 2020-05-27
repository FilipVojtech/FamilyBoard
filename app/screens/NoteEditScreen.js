import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from '../components/AuthProvider';
import {ThemeContext} from '../components/ThemesContext';

export default function NoteEditScreen({route, navigation}) {
    const {mainColor} = useContext(ThemeContext);
    const {user} = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [parsedNotes, setParsedNotes] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('notes')
            .then(value => {
                setParsedNotes(JSON.parse(value));
            });
    }, []);

    return (
        <View style={style.container}>
            {/**
             Textové pole pro zadání nadpisu
             */}
            <TextInput
                style={style.title}
                numberOfLines={1}
                placeholder={'Nadpis (nepovinný)'}
                onChangeText={string => setTitle(string)}
                returnKeyType={'done'}
                blurOnSubmit={true}
                defaultValue={route.params.title}
            />
            {/**
             Textové pole pro zadání textu poznámky
             */}
            <TextInput
                autoFocus={true}
                style={style.text}
                multiline
                textAlignVertical={'top'}
                numberOfLines={1}
                placeholder={'Sem něco napiš'}
                onChangeText={string => setText(string)}
                blurOnSubmit={true}
                returnKeyType={'none'}
                defaultValue={route.params.text}
            />
            <Button
                title={'Uložit'}
                color={mainColor}
                onPress={() => {
                    alert(`Zadaný text: ${title} | ${text}`);
                    navigation.goBack();
                }}/>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        borderBottomWidth: 1,
    },
    text: {
        flexGrow: 1,
    },
    buttonArea: {},
    saveButton: {
        backgroundColor: 'black',
    },
});
