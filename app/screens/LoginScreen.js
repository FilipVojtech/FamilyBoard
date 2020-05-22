import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import {Center} from '../components/Center';

//Obrazovka s odkazy na přihlašovací, nebo registrační obrazovky
export default function LoginScreen({navigation}) {
    return (
        <Center>
            <View>
                <Text>Login!</Text>
                <Button title={'Let me in!'} onPress={console.log('Somebody wants in')}/>
                <Button title={'I want to register'} onPress={() => navigation.navigate('Register')}/>
            </View>
        </Center>

    );
}
