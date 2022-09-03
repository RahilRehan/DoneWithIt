import React, { PropsWithChildren } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

interface Props extends PropsWithChildren {
	initialValues: { [key: string]: any }
	onSubmit: (values: any) => void
	validationScheme: any
}

const AppForm: React.FC<Props> = ({
	initialValues,
	onSubmit,
	validationScheme,
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
