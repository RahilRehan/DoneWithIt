import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

function Welcome() {
    return (
        <ImageBackground 
            blurRadius={7}
            style={styles.background} 
            source={require("../assets/background.jpg")}>
        
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <AppText>Sell what you don't need</AppText>
        </View>
        

        <View style={styles.buttonsContainer}>
            <AppButton title="Login" onPress={() => {}} />
            <AppButton title="Register" onPress={() => {}} color="secondary"/>
        </View>

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
    },
    buttonsContainer: {
        width: "100%"
    }
})

export default Welcome;