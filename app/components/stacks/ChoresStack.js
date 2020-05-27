import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CalendarScreen from '../../screens/CalendarScreen';

export const ChoresStack = ({}) => {
    const Stack = createStackNavigator();

    //Navigační stack pro záložku rutin
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name={'Home'} component={CalendarScreen}/>
        </Stack.Navigator>
    );
};
