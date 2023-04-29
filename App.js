import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Homepage} from "./components/Homepage";
import {Register} from "./components/Register";
export default function App() {
  return (
    <View style={styles.container}>
      <Homepage />
      {/*<Register/>*/}
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
