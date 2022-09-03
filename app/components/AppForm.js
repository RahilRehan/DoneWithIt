import React from 'react'
import { Formik } from 'formik'

const AppForm = ({
	initialValues,
	onSubmit,
	validationSchema: validationScheme,
	children,
}) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationScheme}
		>
			{() => <>{children}</>}
		</Formik>
	)
}

export default AppForm
