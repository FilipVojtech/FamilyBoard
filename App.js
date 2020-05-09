/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//Materialize UI
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const App: () => React$Node = () => {
    return (
        <View>
            <Text style={styles.ayy}>Frrrr</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    ayy: {
        fontSize: 60,
        color: '#ff0000',
    },
});

export default App;
