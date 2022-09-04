import React, { PropsWithChildren } from 'react'
import { StyleSheet, Platform, Text } from 'react-native'
import defaultStyles from '../config/styles'
interface Props extends PropsWithChildren {
	style?: { [key: string]: any }
	[x: string]: any
}

const AppText: React.FC<Props> = ({ children, style, ...rest }) => {
	return (
		<Text style={[styles.text, style]} {...rest}>
			{children}
		</Text>
	)
}

// 1. Lot of duplication for platform specific code

const styles = StyleSheet.create({
	text: defaultStyles.text,
})

// 2. Below approach works well for small changes and styling
// but, if we want to have completely different implementation according to platform,
// we can create two files with extension ending with .ios.tsx or .android.tsx
// devices will pickup right file according to platform

// const styles = StyleSheet.create({
//     text: {
//         ...Platform.select({
//             ios: {
//                 fontSize: 18,
//                 fontFamily: "Avenir"
//             },
//             android: {
//                 fontSize: 18,
//                 fontFamily: "Roboto"
//             }
//         })
//     }
// })

export default AppText
