import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

interface Props {
	size: number
	name: string
	backgroundColor: string
	iconColor: string
}

const Icon: React.FC<Props> = ({
	size = 40,
	name,
	backgroundColor = colors.black,
	iconColor,
}) => {
	return (
		<View
			style={{
				height: size,
				width: size,
				borderRadius: size / 2,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor,
			}}
		>
			<MaterialCommunityIcons
				size={size * 0.5}
				name={name}
				color={iconColor}
			/>
		</View>
	)
}

export default Icon
