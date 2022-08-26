import React from 'react';
import {Image, StyleSheet, View} from 'react-native'
import colors from '../config/colors';

function ViewImageScreen() {
    return (
        <View style={styles.imageContainer}>
            <View style={styles.closeIcon}/>
            <View style={styles.deleteIcon}/>
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
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 20,
        left: 30
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 20,
        right: 30
    }
})

export default ViewImageScreen;