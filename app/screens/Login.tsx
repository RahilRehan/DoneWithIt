import React from 'react'
import { Image, StyleSheet } from 'react-native'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen'
import { Formik } from 'formik'
import * as Yup from 'yup'
import AppText from '../components/AppText'

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
				{({ handleChange, handleSubmit, errors }) => (
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
						<AppText style={{ color: 'red' }}>
							{errors.email}
						</AppText>

						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							icon="lock"
							placeholder="Password"
							textContentType="password"
							secureTextEntry
							onChangeText={handleChange('password')}
						/>
						<AppText style={{ color: 'red' }}>
							{errors.password}
						</AppText>

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
