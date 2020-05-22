import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack} from './HomeStack';
import {NotesStack} from './NotesStack';
import {UserStack} from './UserStack';
import MessagesScreen from '../screens/MessagesScreen';
import {ChoresStack} from './ChoresStack';

const Tab = createBottomTabNavigator();

//Hlavní navigace v aplikaci v podobě záložek
//Tento komponent zahrnuje všechny stacky, popř. jen obrazovky.
export default function Navigation() {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="User" component={UserStack}/>
            <Tab.Screen name='Chores' component={ChoresStack}/>
            <Tab.Screen name="Home" component={HomeStack}/>
            <Tab.Screen name="Notes" component={NotesStack}/>
            <Tab.Screen name='Messages' component={MessagesScreen}/>
        </Tab.Navigator>
    );
}
