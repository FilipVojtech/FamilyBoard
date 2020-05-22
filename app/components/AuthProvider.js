import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = React.createContext({
    user: null,
    login: () => {
    },
    logout: () => {
    },
});

//Dummy data pro uživatele
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{
            user: user,
            login: () => {
                const fakeUser = {username: 'Francis'};
                setUser(fakeUser.username);
                AsyncStorage.setItem('user', JSON.stringify(fakeUser));
            },
            logout: () => {
                setUser(null);
                AsyncStorage.setItem('user', null);
            },
        }}>
            {children}
        </AuthContext.Provider>
    );
};
