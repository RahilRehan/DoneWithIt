import React from 'react'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

interface Props {
	name: string
	width?: number
	[x: string]: any
}

const AppFormFields: React.FC<Props> = ({ name, width, ...rest }) => {
	const { handleChange, errors, setFieldTouched, touched } =
		useFormikContext()

	return (
		<>
			<AppTextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={handleChange(name)}
				width={width}
				{...rest}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	)
}

export default AppFormFields
