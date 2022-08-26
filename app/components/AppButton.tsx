import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

interface Props{
    title: string,
    onPress: () => void,
    color?: string
}

const AppButton : React.FC<Props> = ({title, onPress, color="primary"})  => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        margin: 10,
    },
    title: {
        color: colors.white,
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default AppButton;
