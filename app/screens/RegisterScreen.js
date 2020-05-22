import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import {Center} from '../components/Center';

//Registrační obrazovka
//Registrovat se mohou pouze rodiče (osoby nad 18 let)
export default function RegisterScreen({navigation}) {
    return (
        <Center>
            <View>
                <Text>Register!</Text>
                <Button title={'Go back to login'} onPress={() => navigation.navigate('Login')}/>
            </View>
        </Center>

    );
}
