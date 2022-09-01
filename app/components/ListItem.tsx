import React from 'react'
import {
	Image,
	View,
	StyleSheet,
	TouchableHighlight,
	ImageSourcePropType,
} from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

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
							<AppText style={styles.title}>{title}</AppText>
							{subTitle && (
								<AppText style={styles.subTitle}>
									{subTitle}
								</AppText>
							)}
						</View>
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
		marginLeft: 10,
		justifyContent: 'center',
	},
})

export default ListItem
