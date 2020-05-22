import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

//TODO: Obrazovka uživatele
//Obsahuje profilový obrázek, jméno, ostatní členy rodiny, odkaz na obrazovku zdraví
export default function UserScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>User!</Text>
            <Button title='Health' onPress={()=>navigation.navigate('Health')}/>
        </View>
    );
}
