import React, {useState} from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import {Center} from '../components/Center';

//Registrační obrazovka
//Registrovat se mohou pouze rodiče (osoby nad 18 let)
export default function RegisterScreen({navigation}) {
    const [isShown, setIsShown] = useState(false);
    const text = isShown ? 'Už jsi' : 'Nejsi zaregistrovaný';

    return (
        <Center>
            <View>
                <Button title={'Zaregistrovate se'} onPress={() => setIsShown(true)}/>
                <Button title={'Zpět na přihlášení'} onPress={() => navigation.navigate('Login')}/>
                <Text>{text}</Text>
            </View>
        </Center>
    );
}
