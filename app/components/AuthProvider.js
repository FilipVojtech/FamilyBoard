import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = React.createContext({
    user: null,
    login: () => {
    },
    loginMother: () => {
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
                let addedUser = new User('Dwayne', 'Dwayne', 'Johnson', true, 'bf68e9a7-b484-4f3a-8cbd-6d4c90c1587f');
                setUsers([...users, addedUser]);
                setUser(addedUser);
                AsyncStorage.setItem('user', JSON.stringify(user));
            },
            loginMother: () => {
                let addedUser = new User('Anežka', 'Anežko', 'Česká', true, '1be0c7ac-7052-496b-8b48-93318e701766');
                setUsers([...users, addedUser]);
                setUser(addedUser);
                AsyncStorage.setItem('user', JSON.stringify(user));
            },
            loginChild: () => {
                let addedUser = new User('Francis', 'Francisi', 'z Assisi', false, '2f4a7080-4605-455b-a3ea-2ad686dd54d1');
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
    constructor(name, volaci, surname, isParent, UUID, diseases, allergies, contact, medication) {
        this.name = name;
        this.volaci = volaci;
        this.surname = surname;
        this.isParent = isParent;
        this.UUID = UUID;
        this.profilePicture = null;

        this.diseases = diseases;
        this.allergies = allergies;
        this.contact = contact;
        this.medication = medication;
    }
}
