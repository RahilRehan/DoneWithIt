import React, { useState } from 'react'
import { View, StyleSheet, Modal, Button, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/styles'
import AppText from './AppText'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Screen from './Screen'
import PickerItem from './PickerItem'
import { categoryType } from '../../App'

interface Props {
	icon?: any
	[x: string]: any
	numColumns: number
	placeholder: string
	PickerItemComponent: React.FC
	selectedItem: categoryType
	onSelectItem: (item: any) => void
}

const AppPicker: React.FC<Props> = ({
	icon,
	items,
	numColumns = 1,
	placeholder,
	PickerItemComponent = PickerItem,
	selectedItem,
	onSelectItem,
}) => {
	const [modalVisible, setModalVisible] = useState(false)

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							style={styles.icon}
							name={icon}
							size={20}
							color="grey"
						/>
					)}
					{selectedItem ? (
						<AppText style={styles.text}>
							{selectedItem.label}
						</AppText>
					) : (
						<AppText style={styles.placeholder}>
							{placeholder}
						</AppText>
					)}

					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color="grey"
					/>
				</View>
			</TouchableWithoutFeedback>

			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<Button
						title="Close"
						onPress={() => setModalVisible(false)}
					/>
					<FlatList
						data={items}
						numColumns={numColumns}
						keyExtractor={(item) => item.value.toString()}
						renderItem={({ item }) => (
							<PickerItemComponent
								item={item}
								onPress={() => {
									onSelectItem(item)
									setModalVisible(false)
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.light,
		borderRadius: 25,
		flexDirection: 'row',
		width: '100%',
		padding: 15,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
	placeholder: {
		color: defaultStyles.colors.medium,
		flex: 1,
	},
})

export default AppPicker
