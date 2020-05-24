import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {Text, TouchableOpacity} from 'react-native';
import {AuthContext} from './AuthProvider';

//Navigační stack pro domovskou obrazovku
export const HomeStack = ({}) => {
    const Stack = createStackNavigator();
    const {logout} = useContext(AuthContext);

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerRight: () => {
                        return (
                            <TouchableOpacity style={{marginRight: 10}} onPress={() => logout()}>
                                <Text>Log Out</Text>
                            </TouchableOpacity>
                        );
                    },
                    title: false,
                }}
                name={'Home'}
                component={HomeScreen}
            />
        </Stack.Navigator>
    );
};
