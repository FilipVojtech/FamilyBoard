import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

//Navigační stack pro domovskou obrazovku
export const HomeStack = ({}) => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name={'Home'} component={HomeScreen}/>
        </Stack.Navigator>
    );
};
