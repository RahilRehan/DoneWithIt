import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import CategoryPickerItem from '../components/CategoryPickerItem'

import { AppForm, AppFormFields, SubmitButton } from '../components/forms'
import AppFormPicker from '../components/forms/AppFormPicker'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label('Title'),
	price: Yup.string().required().min(1).label('Price'),
	description: Yup.string().label('Description'),
	category: Yup.object().required().nullable().label('Category'),
})

const categories = [
	{
		backgroundColor: '#fc5c65',
		icon: 'floor-lamp',
		label: 'Furniture',
		value: 1,
	},
	{
		backgroundColor: '#fd9644',
		icon: 'car',
		label: 'Cars',
		value: 2,
	},
	{
		backgroundColor: '#fed330',
		icon: 'camera',
		label: 'Cameras',
		value: 3,
	},
	{
		backgroundColor: '#26de81',
		icon: 'cards',
		label: 'Games',
		value: 4,
	},
	{
		backgroundColor: '#2bcbba',
		icon: 'shoe-heel',
		label: 'Clothing',
		value: 5,
	},
	{
		backgroundColor: '#45aaf2',
		icon: 'basketball',
		label: 'Sports',
		value: 6,
	},
	{
		backgroundColor: '#4b7bec',
		icon: 'headphones',
		label: 'Movies & Music',
		value: 7,
	},
	{
		backgroundColor: '#a55eea',
		icon: 'book-open-variant',
		label: 'Books',
		value: 8,
	},
	{
		backgroundColor: '#778ca3',
		icon: 'application',
		label: 'Other',
		value: 9,
	},
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
					width={120}
				/>
				<AppFormPicker
					items={categories}
					numColumns={3}
					name="category"
					placeholder="Category"
					PickerItemComponent={CategoryPickerItem}
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
