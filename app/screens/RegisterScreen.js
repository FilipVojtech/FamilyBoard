import React, {useContext} from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import {Center} from '../components/Center';
import {AuthContext} from '../components/AuthProvider';

//Registrační obrazovka
//Registrovat se mohou pouze rodiče (osoby nad 18 let)
export default function RegisterScreen({navigation}) {
    const {user} = useContext(AuthContext);
    return (
        <Center>
            <View>
                <Text>Register!</Text>
                <Text>Usr: {user ?? 'null'}</Text>
                <Button title={'Go back to login'} onPress={() => navigation.navigate('Login')}/>
            </View>
        </Center>

    );
}
