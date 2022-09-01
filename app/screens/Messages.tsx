import React, { useState } from 'react'
import { FlatList, ImageRequireSource } from 'react-native'
import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'

interface messageInterface {
	id: number
	title: string
	description: string
	image: ImageRequireSource
}

const initialMessages: messageInterface[] = [
	{
		id: 1,
		title: 'T1',
		description: 'D1',
		image: require('../assets/mosh.jpg'),
	},
	{
		id: 3,
		title: 'T3',
		description: 'D3',
		image: require('../assets/mosh.jpg'),
	},
]

function Messages() {
	const [messages, setMessages] = useState(initialMessages)
	const [refreshing, setRefreshing] = useState(false)

	const handleDelete = (message: messageInterface) => {
		setMessages(messages.filter((m) => m.id != message.id))
	}

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				refreshing={refreshing}
				onRefresh={() =>
					setMessages([
						{
							id: 2,
							title: 'T2',
							description: 'D2',
							image: require('../assets/mosh.jpg'),
						},
					])
				}
				renderItem={({ item }) => (
					<ListItem
						image={item.image}
						title={item.title}
						subTitle={item.description}
						onPress={() => console.log('Message selected', item)}
						renderRightActions={() => (
							<ListItemDeleteAction
								onPress={() => handleDelete(item)}
							/>
						)}
					/>
				)}
				ItemSeparatorComponent={() => <ListItemSeparator />}
			/>
		</Screen>
	)
}

export default Messages
