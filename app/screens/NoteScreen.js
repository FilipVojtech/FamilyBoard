import React, {useContext} from 'react';
import {Button} from 'react-native';
import NoteList from '../components/NoteList';
import {ThemeContext} from '../components/ThemesContext';

// Obrazovka obsahující seznam všech poznámek a tlačítko pro přidání poznámky
// Nic zásadního se zde neděje
export default function NoteScreen({navigation}) {
    const {mainColor} = useContext(ThemeContext);
    return (
        <React.Fragment>
            <NoteList navigation={navigation}/>
            <Button
                title={'Přidat poznámku'}
                onPress={() => navigation.navigate('Add')}
                color={mainColor}
            />
        </React.Fragment>
    );
}
