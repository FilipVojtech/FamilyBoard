import React, {useContext, useEffect, useState} from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity, Text, FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../components/Themes';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from '../components/AuthProvider';

//TODO:
//Všichni členové domácnosti zde chatují ve skupinové koncerzaci
export default function MessagesScreen() {
    const {user} = useContext(AuthContext);
    const {mainColor} = useContext(ThemeContext);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('messages')
            .then(messagesString => {
                setMessages(JSON.parse(messagesString));
            });
    }, []);

    return (
        <View style={style.screen}>
            <FlatList
                data={messages}
                renderItem={({item, index}) => (
                    <View style={style.messagesArea}>
                        {(index > 0 && messages[index - 1].dateAdded === item.dateAdded) ?
                            null : <Text style={[style.unimportant, style.date]}>{item.dateAdded}</Text>}
                        <View>
                            {(index > 0 && messages[index - 1].UUID === item.UUID) ?
                                null : <Text style={[style.unimportant, style.author]}>{item.author}</Text>}
                            <Text style={style.messageText}>{item.message}</Text>
                        </View>
                    </View>
                )
                }/>
            <View style={style.inputArea}>
                <TextInput
                    value={message}
                    style={style.textInputBox}
                    numberOfLines={2}
                    multiline={true}
                    onChangeText={text => {
                        setMessage(text);
                    }}
                    placeholder='Type something...'
                />

                {/**
                 * Textové pole s tlačítkem pro odeslání
                 **/}
                <View style={{alignSelf: 'center'}}>
                    {/**
                     Odeslat zprávu jen tehdy, je-li hodnota "truthy"
                     Vygeneruje se stisknutelné tlačítko, jen tehdy, je-li hodnota truthy
                     */}
                    {message != false ? ( //Zůstane tak, jinak budou přijimány i poznámky naplněné whitespace
                        <TouchableOpacity
                            onPress={() => {
                                //Vyvoří zprávu jako objekt
                                //Nastaví state, tak aby odpovídal skutečnosti
                                //Uloží seznam zpráv do Uložiště
                                const createdMessage = new Message(messages.length.toString(), `${user.name} ${user.surname}`, message, user.UUID);
                                setMessage('');
                                setMessages([...messages, createdMessage]);
                                AsyncStorage.setItem('messages', JSON.stringify([...messages, createdMessage]));
                            }}>
                            {/** Tlačítko pro deslání zprávy */}
                            <Icon
                                name='send'
                                size={30}
                                style={[style.sendIcon, {color: mainColor}]}
                            />
                        </TouchableOpacity>
                    ) : <Icon
                        name='send'
                        size={30}
                        style={[style.sendIcon, {color: 'grey'}]}
                    />}
                </View>
            </View>
        </View>
    );
}

class Message {
    constructor(key, author, message, userUUID) {
        this.key = key;
        this.author = author;
        this.message = message;
        this.dateAdded = `${new Date().getDay()}.${new Date().getMonth()} ${new Date().getFullYear()}`;
        this.UUID = userUUID;
    }
}

const style = StyleSheet.create({
    screen: {
        marginHorizontal: 5,
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'flex-end',
    },
    messagesArea: {
        backgroundColor: 'red',
        flexGrow: 1,
    },
    inputArea: {
        backgroundColor: '#11f340',
        flexDirection: 'row',
        padding: 5,
    },
    textInputBox: {
        paddingLeft: 10,
        borderRadius: 20,
        backgroundColor: '#d4d4d4',
        flex: 1,
    },
    sendIcon: {
        marginLeft: 3,
        color: '#333',
    },
    unimportant: {
        fontSize: 12,
        fontStyle: 'italic',
    },
    message: {
        marginVertical: 5,
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 10,
    },
    messageText: {
        fontSize: 16,
    },
    date: {},
    author: {},
});
