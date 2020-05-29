import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack} from './HomeStack';
import {NotesStack} from './NotesStack';
import {UserStack} from '../UserStack';
import MessagesScreen from '../../screens/MessagesScreen';
import {CalendarStack} from './CalendarStack';
import {AuthContext} from '../AuthProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../ThemesContext';

const Tab = createBottomTabNavigator();

//Hlavní navigace v aplikaci v podobě záložek
//Tento komponent zahrnuje všechny stacky, popř. jen obrazovky.
export default function Navigation() {
    const {mainColor} = useContext(ThemeContext);
    const {user} = useContext(AuthContext);
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Notes') {
                        iconName = focused ? 'note-multiple' : 'note-multiple-outline';
                    } else if (route.name === 'Messages') {
                        iconName = focused ? 'message-text' : 'message-text-outline';
                    } else if (route.name === 'Calendar') {
                        iconName = focused ? 'calendar-month' : 'calendar-month-outline';
                    } else if (route.name === 'User') {
                        iconName = focused ? 'account-circle' : 'account-circle-outline';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: mainColor,
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen options={{title: user.name}} name="User" component={UserStack}/>
            <Tab.Screen options={{title: 'Kalendář'}} name='Calendar' component={CalendarStack}/>
            <Tab.Screen options={{title: 'Domů'}} name="Home" component={HomeStack}/>
            <Tab.Screen options={{title: 'Poznámky'}} name="Notes" component={NotesStack}/>
            <Tab.Screen options={{title: 'Zprávy'}} name='Messages' component={MessagesScreen}/>
        </Tab.Navigator>
    );
}
