import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import { AppForm, AppFormFields, SubmitButton } from '../components/forms'
import AppFormPicker from '../components/forms/AppFormPicker'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label('Title'),
	price: Yup.string().required().min(1).label('Price'),
	description: Yup.string().label('Description'),
	category: Yup.object().required().nullable().label('Category'),
})

const catergories = [
	{ label: 'Furniture', value: 1 },
	{ label: 'Clothing', value: 2 },
	{ label: 'Camera', value: 3 },
]

const ListingEdit = () => {
	return (
		<Screen style={styles.container}>
			<AppForm
				initialValues={{
					title: '',
					price: '',
					description: '',
					category: null,
				}}
				validationScheme={validationSchema}
				onSubmit={(values) => console.log(values)}
			>
				<AppFormFields
					name="title"
					maxLength={255}
					placeholder="Title"
				/>
				<AppFormFields
					name="price"
					maxLength={8}
					placeholder="Price"
					keyboardType="numeric"
				/>
				<AppFormPicker
					items={catergories}
					name="category"
					placeholder="Category"
				/>
				<AppFormFields
					maxLength={255}
					multiline
					name="description"
					numberOfLines={3}
					placeholder="Description"
				/>
				<SubmitButton title="Post" />
			</AppForm>
		</Screen>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
})

export default ListingEdit
