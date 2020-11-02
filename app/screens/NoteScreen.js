import React, {useContext} from 'react';
import {Button} from 'react-native';
import NoteList from '../components/NoteList';
import {ThemeContext} from '../contexts/ThemesContext';
import {LanguageContext} from "../contexts/Languages";

// Obrazovka obsahující seznam všech poznámek a tlačítko pro přidání poznámky
// Nic zásadního se zde neděje
export default function NoteScreen({navigation}) {
    const {mainColor} = useContext(ThemeContext);
    const t = useContext(LanguageContext);

    return (
        <React.Fragment>
            <NoteList navigation={navigation} languageText={t}/>
            <Button
                title={t.addNote}
                onPress={() => navigation.navigate('Add')}
                color={mainColor}
            />
        </React.Fragment>
    );
}
