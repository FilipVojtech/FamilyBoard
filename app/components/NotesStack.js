import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NotesScreen from '../screens/NotesScreen';
import NoteEditScreen from '../screens/NoteEditScreen';

    //Navigační stack pro záložku poznámek
export const NotesStack = ({}) => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name={'Notes'} component={NotesScreen}/>
            <Stack.Screen name={'Edit'} component={NoteEditScreen}/>
        </Stack.Navigator>
    );
};
