import React from 'react'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import { FlatList, StyleSheet, View } from 'react-native'
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeparator from '../components/ListItemSeparator'

const data = [
	{
		title: 'My listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: colors.primary,
		},
	},
	{
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.primary,
		},
	},
]

function Account() {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="Rahil Rehan"
					subTitle="rahilmuti12345@gmail.com"
					image={require('../assets/mosh.jpg')}
				/>
			</View>

			<View style={styles.container}>
				<FlatList
					data={data}
					keyExtractor={(item) => item.title}
					ItemSeparatorComponent={() => <ListItemSeparator />}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
				/>
			</View>
			<View style={styles.container}>
				<ListItem
					title="Log Out"
					IconComponent={
						<Icon name="logout" backgroundColor="#ffe66d" />
					}
				/>
			</View>
		</Screen>
	)
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
	container: {
		marginBottom: 30,
	},
})

export default Account
