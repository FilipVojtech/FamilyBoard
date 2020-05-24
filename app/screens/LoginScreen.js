import React, {useContext} from 'react';
import {
    View,
    Button,
} from 'react-native';
import {Center} from '../components/Center';
import {AuthContext} from '../components/AuthProvider';

//Obrazovka s odkazy na přihlašovací, nebo registrační obrazovky
export default function LoginScreen({navigation}) {
    const {login, loginChild} = useContext(AuthContext);

    return (
        <Center>
            <View>
                <Button title={'Přihlásit se jako dospělý'} onPress={() => login()}/>
                <Button title={'Přihlásit se jako dítě'} onPress={() => loginChild()}/>
                <Button title={'Registrovat se'} onPress={() => navigation.navigate('Register')}/>
            </View>
        </Center>
    );
}
