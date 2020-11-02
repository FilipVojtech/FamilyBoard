import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NoteScreen from '../screens/NoteScreen';
import NoteAddScreen from '../screens/NoteAddScreen';
import NoteEditScreen from '../screens/NoteEditScreen';
import {LanguageContext} from "../contexts/Languages";

//Navigační stack pro záložku poznámek
export const NotesStack = ({}) => {
    const Stack = createStackNavigator();
    const t = useContext(LanguageContext);

    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name={'Notes'} component={NoteScreen}/>
            <Stack.Screen name={'Add'} options={{title: t.addNote}} component={NoteAddScreen}/>
            <Stack.Screen name={'Edit'} options={{title: t.editNote}} component={NoteEditScreen}/>
        </Stack.Navigator>
    );
};
