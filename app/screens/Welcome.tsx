import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import AppText from '../components/AppText';

function Welcome() {
    return (
        <ImageBackground 
            style={styles.background} 
            source={require("../assets/background.jpg")}>
        
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <AppText>Sell what you don't need</AppText>
        </View>
        
        <View style={styles.loginButton}></View> 
        <View style={styles.registerButton}></View> 

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center"
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65"
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4"
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        alignItems: 'center',
        position: "absolute",
        top: 70
    }
})

export default Welcome;