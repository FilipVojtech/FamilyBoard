import React, {useContext, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {AuthContext} from '../contexts/AuthProvider';
import {LanguageContext} from "../contexts/Languages";
import AsyncStorage from '@react-native-community/async-storage';
import Button from "../components/Button";

/**
 * Zde se generuje seznam poznámek
 * Společně s metodami pro správu poznámek
 **/
export default function NoteAddScreen({navigation}) {
    const {user} = useContext(AuthContext);
    const t = useContext(LanguageContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [parsedNotes, setParsedNotes] = useState([]);

    AsyncStorage.getItem('notes')
        .then(value => {
            setParsedNotes(JSON.parse(value));
        });

    const saveNote = () => {
        const strippedUser = {
            name: user.name,
            surname: user.surname,
            isParent: user.isParent,
            UUID: user.UUID,
        };
        const createdNote = new Note(title, text, strippedUser, parsedNotes);
        if (parsedNotes == null) {
            AsyncStorage.setItem('notes', JSON.stringify([createdNote]));
        } else {
            AsyncStorage.setItem('notes', JSON.stringify([...parsedNotes, createdNote]));
        }
        navigation.goBack();
    }

    return (
        <View style={style.container}>
            <TextInput
                style={style.title}
                numberOfLines={1}
                placeholder={`${t.title} (${t.optional.toLowerCase()})`}
                onChangeText={string => setTitle(string)}
                returnKeyType={'done'}
                blurOnSubmit={true}
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
            />

            <Button function={saveNote} isActive={text == false}/>

            {/*<TouchableOpacity*/}
            {/*    style={text == false ? style.disabledButtonArea : [style.buttonArea, {backgroundColor: mainColor}]}*/}
            {/*    disabled={text == false}*/}
            {/*    onPress={() => saveNote()}*/}
            {/*>*/}
            {/*    <Icon name={'content-save'} style={style.saveButton} color={'white'} size={40}/>*/}
            {/*</TouchableOpacity>*/}

            {/*<View>*/}
            {/*    <Button*/}
            {/*        title={'Přidat'}*/}
            {/*        color={mainColor}*/}
            {/*        disabled={text == false} //Podmínka musí zůstat takto, jinak lze nahrát prázdnou poznámku*/}
            {/*        onPress={() => {*/}
            {/*            const strippedUser = {*/}
            {/*                name: user.name,*/}
            {/*                surname: user.surname,*/}
            {/*                isParent: user.isParent,*/}
            {/*                UUID: user.UUID,*/}
            {/*            };*/}
            {/*            const createdNote = new Note(title, text, strippedUser, parsedNotes);*/}
            {/*            if (parsedNotes == null) {*/}
            {/*                AsyncStorage.setItem('notes', JSON.stringify([createdNote]));*/}
            {/*            } else {*/}
            {/*                AsyncStorage.setItem('notes', JSON.stringify([...parsedNotes, createdNote]));*/}
            {/*            }*/}
            {/*            navigation.goBack();*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</View>*/}
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
        fontSize: 20,
        borderBottomWidth: 1,
        borderColor: '#b8b8b8',
    },
    text: {
        flexGrow: 1,
    },
    buttonArea: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        height: 64,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    disabledButtonArea: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        height: 64,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#DFDFDF'
    },
    saveButton: {},
});
