import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack} from './HomeStack';
import {NotesStack} from './NotesStack';
import {UserStack} from './UserStack';
import MessagesScreen from '../screens/MessagesScreen';
import {ChoresStack} from './ChoresStack';
import {AuthContext} from './AuthProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

//Hlavní navigace v aplikaci v podobě záložek
//Tento komponent zahrnuje všechny stacky, popř. jen obrazovky.
export default function Navigation() {
    const {user} = useContext(AuthContext);
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home') iconName = focused ? 'home-outline' : 'home';
                    else if (route.name === 'Notes') iconName = focused ? 'note-multiple-outline' : 'note-multiple';
                    else if (route.name === 'Messages') iconName = focused ? 'message-text-outline' : 'message-text';
                    else if (route.name === 'Chores') iconName = focused ? 'calendar-month-outline' : 'calendar-month';
                    else if (route.name === 'User') iconName = focused ? 'account-circle-outline' : 'account-circle';

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen options={{title: user.name}} name="User" component={UserStack}/>
            <Tab.Screen options={{title: 'Kalendář'}} name='Chores' component={ChoresStack}/>
            <Tab.Screen options={{title: 'Domů'}} name="Home" component={HomeStack}/>
            <Tab.Screen options={{title: 'Poznámky'}} name="Notes" component={NotesStack}/>
            <Tab.Screen options={{title: 'Zprávy'}} name='Messages' component={MessagesScreen}/>
        </Tab.Navigator>
    );
}
