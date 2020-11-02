import React, {useContext, useEffect, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from '../contexts/AuthProvider';
import {ThemeContext} from '../contexts/ThemesContext';
import {LanguageContext} from "../contexts/Languages";

//TODO Note Edit Screen
export default function NoteEditScreen({route, navigation}) {
    const {mainColor} = useContext(ThemeContext);
    const {user} = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [parsedNotes, setParsedNotes] = useState([]);
    const t = useContext(LanguageContext);

    useEffect(() => {
        AsyncStorage.getItem('notes')
            .then(value => {
                setParsedNotes(JSON.parse(value));
            });
    }, []);

    return (
        <View style={style.container}>
            <TextInput
                style={style.title}
                numberOfLines={1}
                placeholder={`${t.title} (${t.optional})`}
                onChangeText={string => setTitle(string)}
                returnKeyType={'done'}
                blurOnSubmit={true}
                defaultValue={route.params.title}
            />
            <TextInput
                autoFocus={true}
                style={style.text}
                multiline
                textAlignVertical={'top'}
                numberOfLines={1}
                placeholder={t.text}
                onChangeText={string => setText(string)}
                blurOnSubmit={true}
                returnKeyType={'none'}
                defaultValue={route.params.text}
            />
            <Button
                title={t.save}
                color={mainColor}
                disabled={text==false}
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
