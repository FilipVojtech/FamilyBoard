import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NotesScreen from '../../screens/NotesScreen';
import NoteAddScreen from '../../screens/NoteAddScreen';
import NoteEditScreen from '../../screens/NoteEditScreen';

//Navigační stack pro záložku poznámek
export const NotesStack = ({}) => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name={'Notes'} component={NotesScreen}/>
            <Stack.Screen name={'Add'} options={{title: 'Přidat poznámku'}} component={NoteAddScreen}/>
            <Stack.Screen name={'Edit'} options={{title: 'Upravit poznámku'}} component={NoteEditScreen}/>
        </Stack.Navigator>
    );
};
