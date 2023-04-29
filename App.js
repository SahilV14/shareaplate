import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Homepage} from "./components/Homepage";
import {Register} from "./components/Register";
import {Donate} from "./components/Donate";
import {DonationForm} from "./components/DonationForm";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
        {/*<Text>HELLO</Text>*/}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Donate" component={Donate} />
          <Stack.Screen name="DonationForm" component={DonationForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000',
        justifyContent: 'center',
    },
});