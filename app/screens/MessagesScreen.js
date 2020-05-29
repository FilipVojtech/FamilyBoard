import React, {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../components/ThemesContext';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from '../components/AuthProvider';

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

    /**
     * Generování seznamu zpráv, tak aby nové byly naspodu
     * proto vlastnost inverted=true
     *
     * Podmíněné stylování musí být dané do elementu, protože jiank nafungují podmínky
     */
    return (
        <View style={style.screen}>
            <FlatList
                inverted={true}
                data={messages}
                renderItem={({item, index}) => (
                    <View
                        style={[
                            style.messagesArea,
                            user.UUID === item.UUID ? {
                                alignItems: 'flex-end',
                                marginLeft: 50,
                            } : {
                                alignItems: 'flex-start',
                                marginRight: 50,
                            }, (index < messages.length - 1 && messages[index + 1].UUID === item.UUID) ?
                                null : {marginTop: 10},
                        ]}>
                        {/*Date added*/}
                        {(index < messages.length - 1 && messages[index + 1].dateAdded === item.dateAdded) ?
                            null : <Text style={[style.unimportant, style.date]}>{item.dateAdded}</Text>}
                        <View style={[
                            style.message,
                            user.UUID === item.UUID ? {
                                backgroundColor: mainColor,
                            } : {},
                        ]}>
                            <View>
                                {/*Author*/}
                                {(index < messages.length - 1 && messages[index + 1].UUID === item.UUID) ?
                                    null : <Text style={[style.unimportant, style.author]}>{item.author}</Text>}
                                {/*Message*/}
                                <Text style={[
                                    style.messageText,
                                    user.UUID === item.UUID ? {
                                        textAlign: 'right',
                                    } : {
                                        textAlign: 'left',
                                    },
                                ]}>{item.message}</Text>
                                {/*Timestamp*/}
                                <Text style={style.unimportant}>{item.timeStamp}</Text>
                            </View>
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
                    placeholder='Napiš něco'
                    onChangeText={text => {
                        setMessage(text);
                    }}
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
                                const createdMessage = new Message(messages == null ? '0' : messages.length.toString(), `${user.name} ${user.surname}`, message, user.UUID);
                                setMessage('');
                                if (messages == null) {
                                    setMessages([createdMessage]);
                                    AsyncStorage.setItem('messages', JSON.stringify([createdMessage]));
                                } else {
                                    setMessages([createdMessage, ...messages]);
                                    AsyncStorage.setItem('messages', JSON.stringify([createdMessage, ...messages]));
                                }
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


/**
 * Classa pro vytvoření objektu zprávy
 */
class Message {
    constructor(key, author, message, userUUID) {
        this.key = key;
        this.author = author;
        this.message = message;
        this.dateAdded = `${new Date().getDay()}.${new Date().getMonth()}. ${new Date().getFullYear()}`;
        this.UUID = userUUID;
        this.timeStamp = `${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}`;
    }
}

const style = StyleSheet.create({
    screen: {
        marginHorizontal: 5,
        flex: 1,
        justifyContent: 'flex-end',
    },
    messagesArea: {
        flexGrow: 1,
    },
    inputArea: {
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
        marginVertical: 1,
        marginHorizontal: 5,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#d4d4d4',
    },
    messageText: {
        fontSize: 16,
    },
    date: {
        alignSelf: 'center',
        textAlign: 'center',
    },
    author: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
