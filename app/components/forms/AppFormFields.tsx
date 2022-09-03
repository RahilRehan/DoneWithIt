import React from 'react'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

interface Props {
	name: string
	[x: string]: any
}

const AppFormFields: React.FC<Props> = ({ name, ...rest }) => {
	const { handleChange, errors, setFieldTouched, touched } =
		useFormikContext()

	return (
		<>
			<AppTextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={handleChange(name)}
				{...rest}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	)
}

export default AppFormFields
