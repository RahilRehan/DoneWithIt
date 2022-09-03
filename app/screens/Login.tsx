import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Image, StyleSheet } from 'react-native'

import Screen from '../components/Screen'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import ErrorMessage from '../components/ErrorMessage'

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
				{({
					handleChange,
					handleSubmit,
					errors,
					setFieldTouched,
					touched,
				}) => (
					<>
						<AppTextInput
							autoCapitalize="none"
							autoCorrect="false"
							icon="email"
							keyboardType="email-address"
							placeholder="Email"
							onBlur={() => setFieldTouched('email')}
							textContentType="emailAdress"
							onChangeText={handleChange('email')}
						/>
						<ErrorMessage
							error={errors.email}
							visible={touched.email}
						/>

						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							icon="lock"
							placeholder="Password"
							onBlur={() => setFieldTouched('password')}
							textContentType="password"
							secureTextEntry
							onChangeText={handleChange('password')}
						/>
						<ErrorMessage
							error={errors.password}
							visible={touched.password}
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
