import React, {useState} from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import TextMessages from '../components/ChatMessages';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//TODO:
//Všichni členové domácnosti zde chatují ve skupinové koncerzaci
export default function MessagesScreen() {
    const [message, setMessage] = useState(null);
    return (
        <View style={style.screen}>
            <TextMessages message={message}/>
            <View style={style.textArea}>
                <TextInput
                    style={style.textBox}
                    numberOfLines={2}
                    multiline={true}
                    onChangeText={text => {
                        setMessage(text);
                    }}
                    placeholder='Type something...'
                />
                <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => {
                    console.log(message);
                }}>
                    <Icon name='send' size={100} style={style.sendIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        marginHorizontal: 5,
        flex: 1,
    },
    textArea: {
        flexDirection: 'row',
    },
    textBox: {
        marginBottom: 5,
        paddingLeft: 10,
        borderRadius: 20,
        backgroundColor: '#d4d4d4',
        flex: 1,
    },
    sendIcon: {
        marginLeft: 3,
        color: '#40E0D0',
        fontSize: 30,
    },
});
