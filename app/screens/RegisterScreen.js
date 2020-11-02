import React, {useContext, useState} from 'react';
import {Button, Text,} from 'react-native';
import {Center} from '../components/Center';
import {ThemeContext} from '../contexts/ThemesContext';
import {LanguageContext} from "../contexts/Languages";

//Registrační obrazovka
//Registrovat se mohou pouze rodiče (osoby nad 18 let)
export default function RegisterScreen() {
    const {mainColor} = useContext(ThemeContext);
    const [isShown, setIsShown] = useState(false);
    const t = useContext(LanguageContext);

    return (
        <Center>
            <Button color={mainColor} title={t.register} onPress={() => setIsShown(true)}/>
            <Text>{isShown ? 'Už jsi' : 'Nejsi zaregistrovaný'}</Text>
        </Center>
    );
}
