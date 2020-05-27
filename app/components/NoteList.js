import React, {useState, useContext, useEffect} from 'react';
import {
    Alert,
    FlatList,
    StyleSheet,
    Text, TouchableOpacity,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Center} from './Center';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from './Themes';
import {AuthContext} from './AuthProvider';

//Modul pro vytvoření listu poznámek z komponentu NoteItem
//Uchovává v sobě state poznámek a spravuje jej
export default function NoteList(props) {
    const {mainColor} = useContext(ThemeContext);
    const {user} = useContext(AuthContext);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('notes')
            .then(value => {
                setNotes(JSON.parse(value));
            });
    });

    if (notes == null || notes.length === 0) {
        return (
            <Center>
                <Text style={{textAlign: 'center'}}>Nic tu není</Text>
                <Text style={{textAlign: 'center'}}>Pro přidání, klepněte na tlačítko přidat poznámku</Text>
            </Center>
        );
    }

    return (
        <React.Fragment>
            {/*<Button title={'Log notes'} onPress={() => console.log(notes)}/>*/}
            <FlatList
                data={notes}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={style.note}
                        onPress={() => props.navigation.navigate('Edit', item)}
                        onLongPress={() => {
                            if (user.isParent || item.user.UUID === user.UUID) {
                                Alert.alert(
                                    'Jsi si jistý?',
                                    'Opravdu chceš vymazat tuto poznámku? \nNelze ji pak vrátit zpět',
                                    [{
                                        text: 'Jsem si jistý',
                                        onPress: () => {
                                            for (let i = 0; i < notes.length; i++) {
                                                if (notes[i].id === item.id) {
                                                    notes.splice(i, 1);
                                                }
                                            }
                                            AsyncStorage.setItem('notes', JSON.stringify(notes));
                                        },
                                    }, {
                                        text: 'Nemazat!',
                                    }],
                                );
                            } else {
                                Alert.alert(
                                    'Nedostatečná opravnění',
                                    'Poznámku, kterou vytvořil rodič, může smazat jen rodič.',
                                );
                            }
                        }}>
                        <View style={style.noteText}>
                            <Text style={style.unimportant}>Přidáno: {item.dateAdded}</Text>
                            {item.title ? (<Text style={style.title}>{item.title}</Text>) : null}
                            <Text style={style.unimportant}>{item.user.name} {item.user.surname}</Text>
                            <Text style={style.text}>{item.text}</Text>
                        </View>
                        {/**
                         Zaškrtávací políčko, které uživateli říká, jestli je poznámka splněna
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
                                name={item.isDone ? 'checkbox-marked-circle-outline' : 'checkbox-blank-circle-outline'}
                                size={34} color={mainColor}/>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
            />
        </React.Fragment>
    );
}

const style = StyleSheet.create({
    note: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-around',

        marginVertical: 5,
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 10,
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
        alignSelf: 'center',
        marginRight: 10,
    },
});
