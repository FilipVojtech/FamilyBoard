import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CalendarScreen from '../../screens/CalendarScreen';
import EventAddScreen from '../../screens/EventAddScreen';

export const CalendarStack = ({}) => {
    const Stack = createStackNavigator();

    //Navigační stack pro záložku rutin
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name={'Home'} component={CalendarScreen}/>
            <Stack.Screen options={{headerTitle: 'Vytvořit novou událost'}} name={'AddEvent'}
                          component={EventAddScreen}/>
        </Stack.Navigator>
    );
};
