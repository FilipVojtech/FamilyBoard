import React, {useContext, useEffect, useState} from 'react';
import {Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from '../components/AuthProvider';
import {Center} from '../components/Center';
import {ThemeContext} from '../components/Themes';

export default function NoteEditScreen(props, {navigation}) {
    const {mainColor} = useContext(ThemeContext);
    const {user} = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [parsedNotes, setParsedNotes] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('notes')
            .then(value => {
                setParsedNotes(JSON.parse(value));
            });
    }, []);

    return (
        <React.Fragment>
            <Center>
                <Text>Edituju</Text>
            </Center>
        </React.Fragment>
    )
}

