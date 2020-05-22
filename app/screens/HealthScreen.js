import React from 'react';
import {
    View,
    Text,
} from 'react-native';

//TODO: Obrazovka, kde si každý uživatel vloží zdravotní údaje
//Údaje mohou přijít vhod, dostal by se člen do života ohrožující situace
export default function HealthScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Health!</Text>
        </View>
    );
}
