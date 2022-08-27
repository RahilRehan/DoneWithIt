import React from 'react';
import {Image, StyleSheet, View} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';

function ViewImageScreen() {
    return (
        <View style={styles.imageContainer}>
            <MaterialCommunityIcons name="close" color="white" size={35} style={styles.closeIcon}/>
            <MaterialCommunityIcons name="delete" color="white" size={35} style={styles.deleteIcon}/>
            <Image
            resizeMode='contain'
            source={require("../assets/chair.jpg")}
            style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: "100%",
        width: "100%",
    },
    imageContainer: {
        flex: 1,
        backgroundColor: colors.black
    },
    closeIcon: {
        position: "absolute",
        top: 35,
        left: 30
    },
    deleteIcon: {
        position: "absolute",
        top: 35,
        right: 30
    }
})

export default ViewImageScreen;