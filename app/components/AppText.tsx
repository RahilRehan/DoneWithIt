import React, {PropsWithChildren} from 'react';
import { StyleSheet, Platform, Text } from "react-native"

interface Props extends PropsWithChildren{
    style: {[key: string]: any}
}

const AppText: React.FC<Props> = ({children, style}) => {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
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
        ...Platform.select({
            ios: {
                fontSize: 18,
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