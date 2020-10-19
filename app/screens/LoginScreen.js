import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import {Center} from '../components/Center';
import {AuthContext} from '../contexts/AuthProvider';
import {ThemeContext} from '../contexts/ThemesContext';
// import {LanguageContext} from "../contexts/LanguagesContext";

//Obrazovka s odkazy na přihlašovací, nebo registrační obrazovky
export default function LoginScreen({navigation}) {
    const {mainColor} = useContext(ThemeContext);
    const {login, loginChild, loginMother} = useContext(AuthContext);

    return (
        <Center>
            <View>
            </View>
            <View>
                <Button color={mainColor} title={'Přihlásit se jako otec'} onPress={() => login()}/>
                <Button color={mainColor} title={'Přihlásit se jako matka'} onPress={() => loginMother()}/>
                <Button color={mainColor} title={'Přihlásit se jako dítě'} onPress={() => loginChild()}/>
                <Button color={mainColor} title={'Registrovat se'} onPress={() => navigation.navigate('Register')}/>
            </View>
        </Center>
    );
}
