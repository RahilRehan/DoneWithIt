import React from 'react'
import AppText from './AppText'
import { StyleSheet } from 'react-native'

interface Props {
	error: string | undefined
}

const ErrorMessage: React.FC<Props> = ({ error }) => {
	if (!error) return null

	return <AppText style={styles.error}>{error}</AppText>
}

const styles = StyleSheet.create({
	error: {
		color: 'red',
	},
})

export default ErrorMessage
