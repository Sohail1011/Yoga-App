import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Input from './components/Input';
import LoginButton from './components/LoginButton';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Input name="Username" security={false} />
      <Input name="Password" security={true} />
      <LoginButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
