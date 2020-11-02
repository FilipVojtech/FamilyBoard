import React, {useContext} from 'react';
import {Button, Image, View,} from 'react-native';
import {Center} from '../components/Center';
import {AuthContext} from '../contexts/AuthProvider';
import {ThemeContext} from '../contexts/ThemesContext';
import {LanguageContext} from "../contexts/Languages";

//Obrazovka s odkazy na přihlašovací, nebo registrační obrazovky
export default function LoginScreen({navigation}) {
    const {mainColor} = useContext(ThemeContext);
    const {login, loginFather, loginChild, loginMother} = useContext(AuthContext);
    const t = useContext(LanguageContext);

    return (
        <Center>
            <Image source={require('../res/img/logo.png')}/>
            <View>
                <Button color={mainColor} title={t.loginFather} onPress={() => loginFather()}/>
                <Button color={mainColor} title={t.loginMother} onPress={() => loginMother()}/>
                <Button color={mainColor} title={t.loginChild} onPress={() => loginChild()}/>
                <Button color={mainColor} title={t.register} onPress={() => navigation.navigate('Register')}/>
            </View>
        </Center>
    );
}
