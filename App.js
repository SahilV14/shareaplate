import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {Homepage} from "./components/Homepage";
import {Register} from "./components/Register";
import {Donate} from "./components/Donate";
import {DonationForm} from "./components/DonationForm";
import {NavigationContainer} from "@react-navigation/native";
const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      {/*<Homepage />*/}
      {/*<Register/>*/}

      <NavigationContainer>
        <Stack.Navigator>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
