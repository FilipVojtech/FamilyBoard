import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = React.createContext({
    user: null,
    profilePicture: null,
    login: () => {
    },
    loginChild: () => {
    },
    logout: () => {
    },
});

//Dummy data pro uživatele
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    /**
     * Pole je zde použito jen pro účely vývoje

     * isParent: true: uživatel je považován za rodiče/zákoného zástupce a má plná oprávnění
     *           false: uživatel je považován za dítě a nemá plná oprávnění
     */
    const [users, setUsers] = useState([]);
    // new User('Francis', 'z Asisi', false, '2f4a7080-4605-455b-a3ea-2ad686dd54d1'),
    // new User('Dwayne', 'Johnson', true, 'bf68e9a7-b484-4f3a-8cbd-6d4c90c1587f'),
    // new User('Anežka', 'Česká', true, '1be0c7ac-7052-496b-8b48-93318e701766'),

    return (
        <AuthContext.Provider value={{
            user: user,
            login: () => {
                let addedUser = new User('Dwayne', 'Johnson', true, 'bf68e9a7-b484-4f3a-8cbd-6d4c90c1587f');
                setUsers([...users, addedUser]);
                setUser(addedUser);
                AsyncStorage.setItem('user', JSON.stringify(user));
            },
            loginChild: () => {
                let addedUser = new User('Francis', 'z Assisi', false, '2f4a7080-4605-455b-a3ea-2ad686dd54d1');
                setUsers([...users, addedUser]);
                setUser(addedUser);
                AsyncStorage.setItem('user', JSON.stringify(user));
            },
            logout: () => {
                setUser(null);
                AsyncStorage.removeItem('user');
            },
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export class User {
    constructor(name, surname, isParent, UUID) {
        this.name = name;
        this.surname = surname;
        this.isParent = isParent;
        this.UUID = UUID;
        this.profilePicture = null;
    }
}
