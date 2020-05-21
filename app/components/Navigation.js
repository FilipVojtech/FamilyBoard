import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack} from './HomeStack';
import {NotesStack} from './NotesStack';
import {UserStack} from './UserStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen name="Notes" component={NotesStack}/>
                <Tab.Screen name="Home" component={HomeStack}/>
                <Tab.Screen name="User" component={UserStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
