import AppButton from './app/components/AppButton'
import ViewImageScreen from './app/screens/ViewImage'
import Welcome from './app/screens/Welcome'
import { Text, TextInput, View } from 'react-native'
import Card from './app/components/Card'
import ListingDetails from './app/screens/ListingDetails'
import Messages from './app/screens/Messages'
import Icon from './app/components/Icon'
import Screen from './app/components/Screen'
import ListItem from './app/components/ListItem'
import Account from './app/screens/Account'
import Listings from './app/screens/Listings'
import { useState } from 'react'
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker'
import Login from './app/screens/Login'

interface categoryType {
	label: string
	value: number
}

const categories: categoryType[] = [
	{ label: 'Furniture', value: 1 },
	{ label: 'Clothing', value: 2 },
	{ label: 'Cameras  ', value: 3 },
]

export { categoryType }

export default function App() {
	// const [category, setCategory] = useState(categories[0])

	return (
		// <Welcome/>
		// <ViewImageScreen/>

		// <View style={{flex: 1, backgroundColor: "#fcf4", paddingTop: 100, padding: 20}}>
		//     <Card
		//         image={require("./app/assets/jacket.jpg")}
		//         title="Red Jacket for sale"
		//         subTitle="$100"
		//     />
		// </View>

		// <ListingDetails image={require("./app/assets/jacket.jpg")}/>

		// <Messages />

		// <Account />

		// <Listings />

		// <Screen>
		// 	<AppPicker
		// 		items={categories}
		// 		selectedItem={category}
		// 		onSelectItem={(item: categoryType) => setCategory(item)}
		// 		icon="apps"
		// 		placeholder="Categories"
		// 	/>
		// 	<AppTextInput icon="email" placeholder="Email" />
		// </Screen>

		<Login />
	)
}
