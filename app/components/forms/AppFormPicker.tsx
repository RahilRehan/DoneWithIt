import { useFormikContext } from 'formik'
import React from 'react'
import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'

interface Props {
	items: { [key: string]: any }
	name: string
	numColumns: number
	placeholder: string
	PickerItemComponent: React.FC<any>
}

const AppFormPicker: React.FC<Props> = ({
	items,
	name,
	placeholder,
	numColumns,
	PickerItemComponent,
}) => {
	const { errors, setFieldValue, touched, values } = useFormikContext()

	return (
		<>
			<AppPicker
				items={items}
				numColumns={numColumns}
				placeholder={placeholder}
				selectedItem={values[name]}
				onSelectItem={(item) => setFieldValue(name, item)}
				PickerItemComponent={PickerItemComponent}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	)
}

export default AppFormPicker
