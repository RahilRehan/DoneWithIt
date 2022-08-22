import React from 'react';
import {Image, StyleSheet, View} from 'react-native'

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
        width: "100%"
    },
    imageContainer: {
        flex: 1,
        backgroundColor: "#000"
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: "#fc5c65",
        position: "absolute",
        top: 20,
        left: 30
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: "#4ecdc4",
        position: "absolute",
        top: 20,
        right: 30
    }
})

export default ViewImageScreen;