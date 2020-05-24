import React, {useState, useContext} from 'react';
import {FlatList} from 'react-native';
import NoteItem from './NoteItem';
import {AuthContext} from './AuthProvider';

//Modul pro vytvoření listu poznámek z komponentu NoteItem
//Uchovává v sobě state poznámek a spravuje jej
export default function NoteList() {
    const [currNotes, addNotes] = useState([
        {
            id: 0,
            title: 'dsad',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: 'dsadsadad asd sa fasdfdssdaff sd',
            datum: 'Thu May 21 2020',
        }, {
            id: 1,
            title: 'Hkhjdskanjk cx',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: 'opopopopo&nbsp; op p op op op o o[cvoxz[c',
            datum: 'Thu May 21 2020',
        }, {
            id: 2,
            title: '',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: '',
            datum: 'Thu May 21 2020',
        }, {
            id: 3,
            title: 'dsa',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: '',
            datum: 'Thu May 21 2020',
        }, {
            id: 4,
            title: '',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: 'saFd zsv',
            datum: 'Thu May 21 2020',
        }, {
            id: 5,
            title: 'dsad',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: 'dsadsadad asd sa fasdfdssdaff sd',
            datum: 'Thu May 21 2020',
        }, {
            id: 6,
            title: 'Hkhjdskanjk cx',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: 'opopopopo&nbsp; op p op op op o o[cvoxz[c',
            datum: 'Thu May 21 2020',
        }, {
            id: 7,
            title: '',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: '',
            datum: 'Thu May 21 2020',
        }, {
            id: 8,
            title: 'dsa',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: '',
            datum: 'Thu May 21 2020',
        }, {
            id: 9,
            title: '',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: 'saFd zsv',
            datum: 'Thu May 21 2020',
        }, {
            id: 10,
            title: 'dsad',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: 'dsadsadad asd sa fasdfdssdaff sd',
            datum: 'Thu May 21 2020',
        }, {
            id: 11,
            title: 'Hkhjdskanjk cx',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: 'opopopopo&nbsp; op p op op op o o[cvoxz[c',
            datum: 'Thu May 21 2020',
        }, {
            id: 12,
            title: '',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: '',
            datum: 'Thu May 21 2020',
        }, {
            id: 13,
            title: 'dsa',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: '',
            datum: 'Thu May 21 2020',
        }, {
            id: 14,
            title: '',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: 'saFd zsv',
            datum: 'Thu May 21 2020',
        }, {
            id: 15,
            title: 'dsad',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: 'dsadsadad asd sa fasdfdssdaff sd',
            datum: 'Thu May 21 2020',
        }, {
            id: 16,
            title: 'Hkhjdskanjk cx',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: 'opopopopo&nbsp; op p op op op o o[cvoxz[c',
            datum: 'Thu May 21 2020',
        }, {
            id: 17,
            title: '',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: '',
            datum: 'Thu May 21 2020',
        }, {
            id: 18,
            title: 'dsa',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: '',
            datum: 'Thu May 21 2020',
        }, {
            id: 19,
            title: '',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: 'saFd zsv',
            datum: 'Thu May 21 2020',
        }, {
            id: 20,
            title: '',
            dateAdded: '21.4. 2020',
            isDone: false,
            text: 'saFd zsv',
            datum: 'Thu May 21 2020',
        },
    ]);

    return (
        <FlatList
            data={currNotes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <NoteItem object={item}/>}
            style={{
                marginTop: 10,
                marginBottom: 35
            }}
        />
    );
}

class Note {
    constructor(id, title, text) {
        const {name} = useContext(AuthContext);
        this.id = id.toString();
        this.title = title;
        this.dateAdded = new Date().getDate() + '.' + new Date().getMonth() + '. ' + new Date().getFullYear();
        this.isDone = false;
        this.text = text;
        this.datum = new Date().toDateString();
        this.user = name;
    }
}
