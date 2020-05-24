import React, {useState} from 'react';
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native';
import TextMessages from '../components/ChatMessages';

//TODO: Chatovací obrazovka
//Všichni členové domácnosti zde chatují ve skupinové koncerzaci
export default function MessagesScreen() {
    const [enter, setEnter] = useState('Text will appear here');
    return (
        <View style={style.screen}>
            <TextInput
                multiline
                numberOfLines={4}
                style={style.textBox}
                onKeyPress={key => {
                    if (key === 'Enter') {
                        setEnter('Enter pressed');
                    }
                }}
                onChangeText={text => {
                    setEnter(text);
                }}
                placeholder='Type something...'
            />
            <TextMessages/>
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column-reverse',
        marginLeft: 10,
        marginRight: 10,
    },
    textBox: {
        borderWidth: 1,
        borderRadius: 20,
    },
});
