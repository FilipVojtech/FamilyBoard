import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {LanguageContext} from "../contexts/Languages";

export const LoginStack = ({}) => {
    const Stack = createStackNavigator();
    const t = useContext(LanguageContext);

    //Navigační stack pro Login
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
            <Stack.Screen options={{headerTitle:t.createAccount}} name='Register' component={RegisterScreen}/>
        </Stack.Navigator>
    );
};
