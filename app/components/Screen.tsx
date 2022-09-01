import React, { PropsWithChildren } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

interface Props extends PropsWithChildren {
	style?: object
}

const Screen: React.FC<Props> = ({ children, style: extraStyles }) => {
	return (
		<SafeAreaView style={[styles.screen, extraStyles]}>
			{children}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
	},
})

export default Screen