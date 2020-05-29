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

    /**
     * Obrazovka aktivní uživatele,
     * Zobrazuje se tu jeho jméno a popř. profilový obrázek
     *
     * Dále je tu také tlačítko pro přepnutí na jeho zdravotní kartu
     */
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
        style={{padding: 10, marginRight: 5}}
        onPress={logout}>
        <Text style={{fontSize: 16, color: 'red'}}>Odhlásit se</Text>
    </TouchableOpacity>
);
