import React, {useContext, useState} from 'react';
import {Alert, Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Center} from './Center';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../contexts/ThemesContext';
import {AuthContext} from '../contexts/AuthProvider';
import Interactable from 'react-native-interactable';

export default function NoteList(props) {
    const {mainColor} = useContext(ThemeContext);
    const {user} = useContext(AuthContext);
    //Language context is accessible through props.languageText.stringKey
    const [notes, setNotes] = useState([]);

    AsyncStorage.getItem('notes')
        .then(value => {
            setNotes(JSON.parse(value));
        });

    /**
     * The user can delete the note if he's either parent or created the note
     */
    function deleteNote(item) {
        if (user.isParent || item.user.UUID === user.UUID) {
            Alert.alert(
                'Jsi si jistý?',
                'Opravdu chceš vymazat tuto poznámku? \nNelze ji pak vrátit zpět',
                [
                    {
                        text: 'Smazat',
                        onPress: () => {
                            for (let i = 0; i < notes.length; i++) {
                                if (notes[i].id === item.id) {
                                    notes.splice(i, 1);
                                }
                            }
                            AsyncStorage.setItem('notes', JSON.stringify(notes));
                        },
                    },
                    {
                        text: 'Nemazat!',
                    },
                ],
            );
        } else {
            Alert.alert(
                'Nedostatečná opravnění',
                'Tuhle poznámku nemůžeš smazat, protože ji vytvořil rodič',
            );
        }

    }


    if (notes == null || notes.length === 0) {
        return (
            <Center>
                <Text style={style.center}>{props.languageText.notesNothing}</Text>
            </Center>
        );
    }

    return (
        <React.Fragment>
            <Button title={'Log notes'} onPress={() => console.log(notes)}/>
            <FlatList
                data={notes}
                renderItem={({item}) => (
                    <Interactable.View
                        horizontalOnly={true}
                        snapPoints={[{x: 0}]}>
                        <View style={style.line}/>
                        <TouchableOpacity
                            disabled={false}
                            style={style.note}
                            onPress={() => props.navigation.navigate('Edit', item)}
                            onLongPress={() => deleteNote(item)}>
                            <View style={style.noteText}>
                                <Text style={style.unimportant}>
                                    {`${props.languageText.added}: ${item.dateAdded}`}
                                </Text>
                                {item.title ? <Text style={style.title}>{item.title}</Text> : null}
                                <Text style={style.unimportant}>
                                    {props.languageText.by.toLowerCase() ? props.languageText.by.toLowerCase() + " " : null}{item.user.name} {item.user.surname}
                                </Text>
                                <Text style={style.text}>{item.text}</Text>
                            </View>
                            {/**
                             Zaškrtávací políčko, které uživateli říká, jestli je poznámka splněna
                             Zaškrktnout ho může kdokoliv
                             **/}
                            <TouchableOpacity
                                style={style.noteSettings}
                                onPress={() => {
                                    for (let i = 0; i < notes.length; i++) {
                                        if (notes[i].id === item.id) {
                                            notes[i].isDone = !notes[i].isDone;
                                        }
                                    }
                                    AsyncStorage.setItem('notes', JSON.stringify(notes));
                                }}>
                                <Icon
                                    name={
                                        item.isDone
                                            ? 'checkbox-marked-circle-outline'
                                            : 'checkbox-blank-circle-outline'
                                    }
                                    size={34}
                                    color={mainColor}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </Interactable.View>
                )}
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
