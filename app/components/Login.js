import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import RegisterScreen from '../screens/RegisterScreen';

export const Login = ({}) => {
    const Stack = createStackNavigator();

    //Navigační stack pro Login
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
                <Stack.Screen options={{headerShown: false}} name='Register' component={RegisterScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
