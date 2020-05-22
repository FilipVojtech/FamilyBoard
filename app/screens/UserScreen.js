import React, {useContext} from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import {AuthContext} from '../components/AuthProvider';

//TODO: Obrazovka uživatele
//Obsahuje profilový obrázek, jméno, ostatní členy rodiny, odkaz na obrazovku zdraví
export default function UserScreen({navigation}) {
    const {user, logout} = useContext(AuthContext);
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>User: {user}</Text>
            <Button title='Health' onPress={() => navigation.navigate('Health')}/>
            <Button title='Log Out' onPress={() => logout()}/>
        </View>
    );
}
