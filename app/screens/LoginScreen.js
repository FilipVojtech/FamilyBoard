import React, {useContext} from 'react';
import {
    View,
    Button,
} from 'react-native';
import {Center} from '../components/Center';
import {AuthContext} from '../components/AuthProvider';
import {ThemeContext} from '../components/ThemesContext';

//Obrazovka s odkazy na přihlašovací, nebo registrační obrazovky
export default function LoginScreen({navigation}) {
    const {mainColor} = useContext(ThemeContext);
    const {login, loginChild} = useContext(AuthContext);

    return (
        <Center>
            <View>
                <Button color={mainColor} title={'Přihlásit se jako dospělý'} onPress={() => login()}/>
                <Button color={mainColor} title={'Přihlásit se jako dítě'} onPress={() => loginChild()}/>
                <Button color={mainColor} title={'Registrovat se'} onPress={() => navigation.navigate('Register')}/>
            </View>
        </Center>
    );
}
