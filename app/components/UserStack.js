import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '../screens/UserScreen';
import HealthScreen from '../screens/HealthScreen';

//Navigační stack pro záložku uživatele
export const UserStack = ({}) => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name={'User'} component={UserScreen}/>
            <Stack.Screen name={'Health'} component={HealthScreen}/>
        </Stack.Navigator>
    );
};
