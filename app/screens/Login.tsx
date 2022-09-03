import React from 'react'
import { Image, StyleSheet } from 'react-native'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen'
import { Formik } from 'formik'

const Login = () => {
	return (
		<Screen style={styles.container}>
			<Image
				source={require('../assets/logo-red.png')}
				style={styles.logo}
			/>

			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
			>
				{({ handleChange, handleSubmit }) => (
					<>
						<AppTextInput
							autoCapitalize="none"
							autoCorrect="false"
							icon="email"
							keyboardType="email-address"
							placeholder="Email"
							textContentType="emailAdress"
							onChangeText={handleChange('email')}
						/>

						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							icon="lock"
							placeholder="Password"
							textContentType="password"
							secureTextEntry
							onChangeText={handleChange('password')}
						/>

						<AppButton title="Login" onPress={handleSubmit} />
					</>
				)}
			</Formik>
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
