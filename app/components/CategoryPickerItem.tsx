import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import AppText from './AppText'
import Icon from './Icon'

interface Props {
	label: string
	onPress: () => void
	item: { [key: string]: string }
}

const CategoryPickerItem: React.FC<Props> = ({ item, onPress }) => {
	return (
		<View style={styles.container}>
			<Icon
				backgroundColor={item.backgroundColor}
				name={item.icon}
				size={80}
			/>
			<AppText style={styles.label}>{item.label}</AppText>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		alignItems: 'center',
		width: '33%',
	},
	label: {
		marginTop: 7,
		textAlign: 'center',
	},
})

export default CategoryPickerItem
