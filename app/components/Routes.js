import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../contexts/AuthProvider';
import AsyncStorage from '@react-native-community/async-storage';
import {Center} from './Center';
import {ActivityIndicator} from 'react-native';
import Navigation from '../stacks/Navigation';
import {Login} from '../stacks/Login';
import {NavigationContainer} from '@react-navigation/native';

/**Vykreslování správné části aplikace**/
//Před startem se ukáže načítání
//Začne se hledat uživatel
export default function Routes({}) {
    const {user} = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Zjistí, jestli je uživatel přihlášen
        AsyncStorage.getItem('user')
            .then(userString => {
                if (userString) {
                    //login();
                }
                setLoading(false);
            }).catch(err => {
            console.log('err v routes: ', err);
        });
    }, []);

    //Zatímco hledá uživatele, tak vykresli načítání
    if (loading) {
        return (
            <Center>
                <ActivityIndicator size="large"/>
            </Center>
        );
    }

    /**
     * Pokud je uživatel přihlášený,
     * aplikace vrátí komponent Navigace, který vykreslí aplikaci.
     * Pokud však není uživatel přihlášen, vykreslí se komponent Login
     */

    return (
        <NavigationContainer>
            {user ? <Navigation/> : <Login/>}
        </NavigationContainer>
    );
};
