import {Alert, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../contexts/AuthProvider";
import {ThemeContext} from "../contexts/ThemesContext";
import {LanguageContext} from "../contexts/Languages";

export const Note = (props) => {
    const {mainColor} = useContext(ThemeContext);
    const {user} = useContext(AuthContext);
    const t = useContext(LanguageContext);
    const [notes, setNotes] = useState([]);
    const {navigation, item} = props;

    useEffect(() => {
        AsyncStorage.getItem('notes')
            .then(value => {
                setNotes(JSON.parse(value));
            });
    }, []);

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

    return (
        <TouchableOpacity
            style={style.note}
            onPress={() => navigation.navigate('Edit', item)}
            onLongPress={() => deleteNote(item)}>
            <View style={style.noteText}>
                <Text style={style.unimportant}>
                    {/*Time and date added*/}
                    {`${t.added}: ${item.dateAdded}`}
                </Text>
                {/*
                Title
                * If defined > Show it
                */}
                {item.title ? <Text style={style.title}>{item.title}</Text> : null}
                <Text style={style.unimportant}>
                    {/*Author*/}
                    {t.by.toLowerCase() ? t.by.toLowerCase() + " " : null}{item.user.name} {item.user.surname}
                </Text>
                {/*Note Text*/}
                <Text style={style.text}>{item.text}</Text>
            </View>
            <TouchableOpacity
                style={style.noteSettings}
                onPress={() => {
                    for (let i = 0; i < notes.length; i++) {
                        if (notes[i].id === item.id) notes[i].isDone = !notes[i].isDone;
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
    )
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

