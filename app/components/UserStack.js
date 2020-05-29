import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '../screens/UserScreen';
import HealthScreen from '../screens/HealthScreen';
import {AuthContext} from './AuthProvider';
import {Text, TouchableOpacity} from 'react-native';

//Navigační stack pro záložku uživatele
export const UserStack = ({}) => {
    const Stack = createStackNavigator();
    const {user, logout} = useContext(AuthContext);

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{headerTitle: null, headerRight: () => headerLogOut(logout)}}
                name={'User'}
                component={UserScreen}/>
            <Stack.Screen
                options={{headerTitle: `Zdravotní karta ${user.name} ${user.surname}`}}
                name={'Health'}
                component={HealthScreen}/>
        </Stack.Navigator>
    );
};

const headerLogOut = (logout) => (
    <TouchableOpacity
        style={{marginRight: 10}}
        onPress={logout}>
        <Text style={{fontSize: 16, color: 'red'}}>Odhlásit se</Text>
    </TouchableOpacity>
);
