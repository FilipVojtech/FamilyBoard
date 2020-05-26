import React, {useContext} from 'react';
import {
    Button,
} from 'react-native';
import NoteList from '../components/NoteList';
import {ThemeContext} from '../components/Themes';

//Obrazovka obsahující seznam všech poznámek a tlačítko pro přidání poznámky
export default function NotesScreen({navigation}) {
    const {mainColor} = useContext(ThemeContext);
    return (
        <React.Fragment>
            <Button
                title={'Přidat poznámku'}
                onPress={() => navigation.navigate('Add')}
                color={mainColor}
            />
            <NoteList navigation={navigation}/>
        </React.Fragment>
    );
}
