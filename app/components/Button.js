import React, {useContext} from 'react';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {StyleSheet, TouchableOpacity} from "react-native";
import {ThemeContext} from "../contexts/ThemesContext";

/**
 * Floating Button
 * @returns {JSX.Element} Button
 * @param props
 */
export default function Button(props) {
    const {mainColor} = useContext(ThemeContext);

    return (
        <TouchableOpacity
            style={props.isActive ? style.disabledButtonArea : [style.buttonArea, {backgroundColor: mainColor}]}
            disabled={props.isActive}
            onPress={() => props.function()}>
            <Icon name={'content-save'} style={style.saveButton} color={'white'} size={32}/>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    buttonArea: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        height: 64,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    disabledButtonArea: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        height: 64,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#DFDFDF'
    },
})
