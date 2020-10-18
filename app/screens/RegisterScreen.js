import React, {useContext, useState} from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import {Center} from '../components/Center';
import {ThemeContext} from '../contexts/ThemesContext';

//Registrační obrazovka
//Registrovat se mohou pouze rodiče (osoby nad 18 let)
export default function RegisterScreen({navigation}) {
    const {mainColor} = useContext(ThemeContext);
    const [isShown, setIsShown] = useState(false);

    return (
        <Center>
            <View>
                <Button color={mainColor} title={'Zaregistrovate se'} onPress={() => setIsShown(true)}/>
                <Button color={mainColor} title={'Zpět na přihlášení'} onPress={() => navigation.navigate('Login')}/>
                <Text>{isShown ? 'Už jsi' : 'Nejsi zaregistrovaný'}</Text>
            </View>
        </Center>
    );
}
