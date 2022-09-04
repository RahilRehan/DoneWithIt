import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/styles'

interface Props {
	icon: any
	width: number | string
	[x: string]: any
}

const AppTextInput: React.FC<Props> = ({ icon, width = '100%', ...rest }) => {
	return (
		<View style={[styles.container, { width }]}>
			{icon && (
				<MaterialCommunityIcons
					style={styles.icon}
					name={icon}
					size={20}
					color="grey"
				/>
			)}
			<TextInput
				placeholderTextColor={defaultStyles.colors.medium}
				style={styles.textInput}
				{...rest}
				defaultValue=""
			/>
		</View>
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
	textInput: { ...defaultStyles.text, width: '100%' },
	icon: {
		marginRight: 10,
	},
})

export default AppTextInput
