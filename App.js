import React, {useState, useEffect, useContext} from 'react';
import 'react-native-gesture-handler';
import Navigation from './app/components/Navigation';
import {Login} from './app/components/Login';
import {AuthContext, AuthProvider} from './app/components/AuthProvider';
import {Center} from './app/components/Center';
import {ActivityIndicator} from 'react-native';
import {AsyncStorage} from '@react-native-community/async-storage';

export default function App() {
    const {user, login} = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // check if the user is logged in or not
        AsyncStorage.getItem('user')
            .then(userString => {
                if (userString) {
                    // decode it
                    login();
                }
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    if (loading) {
        return (
            <Center>
                <ActivityIndicator size="large"/>
            </Center>
        );
    }

    return (
        <AuthProvider>
            {user ? <Navigation/> : <Login/>}
        </AuthProvider>
    );
}
