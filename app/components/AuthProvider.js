import React, {useState} from 'react';
import {AsyncStorage} from '@react-native-community/async-storage';

export const AuthContext = React.createContext({});

//Dummy data pro uživatele
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState('null');

    return (
        <AuthContext.Provider value={{
            user,
            login: () => {
                const someUser = {username: 'Fracis'};
                setUser(someUser);
                AsyncStorage.setItem('user', JSON.stringify(someUser));
            },
            logout: () => {
                AsyncStorage.removeItem('user');
            },
        }}>
            {children}
        </AuthContext.Provider>
    );
};
