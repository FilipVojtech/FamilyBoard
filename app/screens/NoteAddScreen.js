import React, {useContext, useEffect, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {ThemeContext} from '../components/ThemesContext';
import {AuthContext} from '../components/AuthProvider';
import AsyncStorage from '@react-native-community/async-storage';

//TODO: Obrazovka pro upravování poznámek
export default function NoteAddScreen({navigation}) {
    const {mainColor} = useContext(ThemeContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const {user} = useContext(AuthContext);
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
            />
            {
                //TODO: Tlačítko
                /*<Icon name={'content-save'} style={style.saveButton} color={mainColor} size={64}/>*/
                /**
                 * Tlačítko je zmáčknutelné, pouze pokud hodnota v proměnné text je truthy
                 **/
            }
            <View style={style.buttonArea}>
                <Button
                    title={'Přidat'}
                    color={mainColor}
                    disabled={text == false} //Podmínka musí zůstat takto, jinak lze nahrát prázdnou poznámku
                    onPress={() => {
                        {/**
                         Vyvoří poznámku jako objekt
                         Uloží seznam poznámek do Uložiště
                         Nakonec se vrátí na předchozí obrazovku
                         **/
                        }
                        const createdNote = new Note(title, text, user, parsedNotes);
                        if (parsedNotes == null) {
                            AsyncStorage.setItem('notes', JSON.stringify([createdNote]));
                        } else {
                            AsyncStorage.setItem('notes', JSON.stringify([...parsedNotes, createdNote]));
                        }
                        navigation.goBack();
                    }}
                />
            </View>
        </View>
    );
}

/**
 * Class pro vytváření objektu
 */
class Note {
    constructor(title, text, user, parsedNotes) {
        this.id = (parsedNotes == null || parsedNotes.length === 0) ? 0 : parsedNotes[parsedNotes.length - 1].id + 1;
        this.key = this.id.toString();
        this.dateAdded = new Date().getDate() + '.' + new Date().getMonth() + '. ' + new Date().getFullYear();
        this.isDone = false;
        this.title = title;
        this.text = text;
        this.user = user;
    }
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
