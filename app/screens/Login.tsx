import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Image, StyleSheet } from 'react-native'

import Screen from '../components/Screen'
import AppFormFields from '../components/AppFormFields'
import SubmitButton from '../components/SubmitButton'

const validationScheme = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
})

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
				validationSchema={validationScheme}
			>
				{() => (
					<>
						<AppFormFields
							name="email"
							icon="email"
							autoCapitalize="none"
							autoCorrect="false"
							keyboardType="email-address"
							placeholder="Email"
							textContentType="emailAdress"
						/>

						<AppFormFields
							autoCapitalize="none"
							autoCorrect={false}
							icon="lock"
							name="password"
							placeholder="Password"
							textContentType="password"
							secureTextEntry
						/>

						<SubmitButton title="Login" />
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
