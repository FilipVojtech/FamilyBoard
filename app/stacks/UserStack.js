import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '../screens/UserScreen';
import HealthScreen from '../screens/HealthScreen';
import {AuthContext} from '../contexts/AuthProvider';
import {Text, TouchableOpacity} from 'react-native';
import {LanguageContext} from "../contexts/Languages";

//Navigační stack pro záložku uživatele
export const UserStack = ({}) => {
    const Stack = createStackNavigator();
    const {user, logout} = useContext(AuthContext);
    const t = useContext(LanguageContext);
    const healthCardTitle = () => {
        if (t.currentLanguage === 'cs') {
            return `${t.healthCard} ${user.name} ${user.surname}`;
        } else if (t.currentLanguage === 'en') {
            return `${user.name} ${user.surname}'s ${t.healthCard.toLowerCase()}`;
        }
    };

    /**
     * Obrazovka aktivní uživatele,
     * Zobrazuje se tu jeho jméno a popř. profilový obrázek
     *
     * Dále je tu také tlačítko pro přepnutí na jeho zdravotní kartu
     */
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{headerTitle: null, headerRight: () => headerLogOut(logout, t)}}
                name={'User'}
                component={UserScreen}/>
            <Stack.Screen
                options={{headerTitle: healthCardTitle()}}
                name={'Health'}
                component={HealthScreen}/>
        </Stack.Navigator>
    );
};

const headerLogOut = (logout, t) => (
    <TouchableOpacity
        style={{padding: 10, marginRight: 5}}
        onPress={logout}>
        <Text style={{fontSize: 16, color: 'red'}}>{t.logout}</Text>
    </TouchableOpacity>
);
