import React, {useContext} from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {AuthContext} from '../components/AuthProvider';
import {ThemeContext} from '../components/ThemesContext';
import {Center} from '../components/Center';

//TODO: Obrazovka uživatele
//Obsahuje profilový obrázek, jméno, ostatní členy rodiny, odkaz na obrazovku zdraví
export default function UserScreen({navigation}) {
    const {mainColor} = useContext(ThemeContext);
    const {user, logout} = useContext(AuthContext);

    return (
        <Center>
            <Text style={style.name}>{user.name} {user.surname}</Text>
            <Button title='Zdravotní karta' color={mainColor} onPress={() => navigation.navigate('Health')}/>
            <Button title='Odhlásit se' color={mainColor} onPress={() => logout()}/>
        </Center>
    );
}

const style = StyleSheet.create({
    name: {
        fontSize: 36,
    },
});
