import AppButton from './app/components/AppButton';
import ViewImageScreen from './app/screens/ViewImage';
import Welcome from './app/screens/Welcome';
import { View } from 'react-native';
import Card from './app/components/Card';
import ListingDetails from './app/screens/ListingDetails';

export default function App() {
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

    <ListingDetails image={require("./app/assets/jacket.jpg")}/>
  );
}
