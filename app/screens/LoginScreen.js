import React, {useContext} from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import {Center} from '../components/Center';
import {AuthContext} from '../components/AuthProvider';

//Obrazovka s odkazy na přihlašovací, nebo registrační obrazovky
export default function LoginScreen({navigation}) {
    const {login} = useContext(AuthContext);

    return (
        <Center>
            <View>
                <Text>Login!</Text>
                <Button title={'Let me in!'} onPress={() => login()}/>
                <Button title={'I want to register'} onPress={() => navigation.navigate('Register')}/>
            </View>
        </Center>

    );
}
