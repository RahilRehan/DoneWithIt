import React from 'react'
import {
	Image,
	View,
	StyleSheet,
	TouchableHighlight,
	ImageSourcePropType,
} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import colors from '../../config/colors'
import AppText from '../AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface Props {
	image?: ImageSourcePropType
	title: string
	subTitle?: string
	onPress?: () => void
	renderRightActions?: (a: any, b: any) => React.ReactNode
	IconComponent?: React.ReactNode
}

const ListItem: React.FC<Props> = ({
	image,
	title,
	subTitle,
	onPress,
	renderRightActions,
	IconComponent,
}) => {
	return (
		<GestureHandlerRootView>
			<Swipeable renderRightActions={renderRightActions}>
				<TouchableHighlight
					underlayColor={colors.light}
					onPress={onPress}
				>
					<View style={styles.listContainer}>
						{image && <Image source={image} style={styles.image} />}
						{IconComponent}
						<View style={styles.detailsContainer}>
							<AppText style={styles.title} numberOfLines={1}>
								{title}
							</AppText>
							{subTitle && (
								<AppText
									style={styles.subTitle}
									numberOfLines={2}
								>
									{subTitle}
								</AppText>
							)}
						</View>
						<MaterialCommunityIcons
							name="chevron-right"
							size={25}
							color={colors.medium}
						/>
					</View>
				</TouchableHighlight>
			</Swipeable>
		</GestureHandlerRootView>
	)
}

const styles = StyleSheet.create({
	listContainer: {
		flexDirection: 'row',
		padding: 15,
		backgroundColor: colors.white,
		alignItems: 'center',
	},
	image: {
		height: 70,
		width: 70,
		borderRadius: 50,
	},
	title: {
		fontWeight: '500',
	},
	subTitle: {
		color: '#6e6969',
	},
	detailsContainer: {
		flex: 1,
		marginLeft: 10,
		justifyContent: 'center',
	},
})

export default ListItem
