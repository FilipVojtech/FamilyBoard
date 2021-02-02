import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../contexts/AuthProvider';
import {LanguageContext} from "../contexts/Languages";
import {Center} from "../components/Center";

export default function HomeScreen() {
    const {user} = useContext(AuthContext);
    const t = useContext(LanguageContext);

    return (
        // <View>
        <Center>
            <Text style={style.greet}>{t.greetings[Math.floor(Math.random() * t.greetings.length)]}, {user.volaci}</Text>
            <View>
                <Text style={style.uiText}>Poslední přidaná poznámka</Text>
            </View>
        </Center>
        // </View>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 10,
    },
    greet: {
        textAlignVertical: 'top',
        textAlign: 'center',
        fontSize: 30,
    },
    quote: {
        fontStyle: 'italic',
        textAlign: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    uiText: {
        fontSize: 16,
        textAlignVertical: 'center',
        margin: 5,
    },
});
