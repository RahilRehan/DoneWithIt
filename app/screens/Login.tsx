import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<Screen style={styles.container}>
			<Image
				source={require('../assets/logo-red.png')}
				style={styles.logo}
			/>

			<AppTextInput
				autoCapitalize="none"
				autoCorrect="false"
				icon="email"
				keyboardType="email-address"
				placeholder="Email"
				textContentType="emailAdress"
				onChangeText={(text: string) => setEmail(text)}
			/>

			<AppTextInput
				autoCapitalize="none"
				autoCorrect={false}
				icon="lock"
				placeholder="Password"
				textContentType="password"
				secureTextEntry
				onChangeText={(text: string) => setPassword(text)}
			/>

			<AppButton
				title="Login"
				onPress={() => console.log(email, password)}
			/>
		</Screen>
	)
}

const styles = StyleSheet.create({
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20,
	},
	container: {
		padding: 10,
	},
})

export default Login
