import AppButton from './app/components/AppButton';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Welcome from './app/screens/Welcome';
import { View } from 'react-native';

export default function App() {
  return (
    <Welcome/>
    // <ViewImageScreen/>

    // <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    //     <AppButton title="Click me!" onPress={() => console.log("PRESSED")}/>
    // </View>
  );
}
