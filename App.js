/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    TextInput,
    Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppTabs} from './app/components/Navigation';

export default function App() {
    const [outputText, setOutputText] = useState('');

    return (
        <NavigationContainer>
            <TextInput placeholder={'HELP'}/>
            <Button title={'Add'}/>
            <AppTabs/>
        </NavigationContainer>
    );
}
