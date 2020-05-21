import React from 'react';
import {
    View,
    Button,
} from 'react-native';
import NoteList from '../components/NoteList';

export default function NotesScreen({navigation}) {
    return (
        <View>
            <Button title={'Add Note'} onPress={() => navigation.navigate('Edit')}/>
            <NoteList/>
        </View>
    );
}
