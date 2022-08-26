import React, {PropsWithChildren} from 'react';
import { StyleSheet, Platform, Text } from "react-native"

const AppText: React.FC<PropsWithChildren> = (props) => {
    return (
        <Text style={styles.text}>{props?.children}</Text>
    );
}


// 1. Lot of duplication for platform specific code

// const styles = StyleSheet.create({
//     text: {
//         fontSize: 18,
//         fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir"
//     }
// })


// 2. Below approach works well for small changes and styling
// but, if we want to have completely different implementation according to platform, 
// we can create two files with extension ending with .ios.tsx or .android.tsx
// devices will pickup right file according to platform

const styles = StyleSheet.create({
    text: {
        color: "tomato",
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir"
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto"
            }
        })
    }
})

export default AppText;