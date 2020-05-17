import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    TextInput,
    Button,
} from 'react-native';

export default function LoginScreen() {
    function handlePress() {
        console.log("heya");
    }
    return (
        <React.Fragment>
            <Button title={'Login'} onPress={()=>handlePress()}/>
        </React.Fragment>
    );
}
