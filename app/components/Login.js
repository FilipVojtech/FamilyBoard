import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

export const Login = ({}) => {
    const Stack = createStackNavigator();

    //Navigační stack pro Login
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
            <Stack.Screen options={{headerShown: false}} name='Register' component={RegisterScreen}/>
        </Stack.Navigator>
    );
};
