import React from 'react';
import {
    Text,
    ScrollView,
} from 'react-native';

export default function TextMessages(props) {
    return (
        <ScrollView style={{flexDirection: 'column-reverse'}}>
            <Text>Zpráva: {props.message}</Text>
        </ScrollView>
    );
}
