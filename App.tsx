import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { initializeApp } from 'firebase/app';
import firebaseConfig from "./firebaseConfig"

const app = initializeApp(firebaseConfig);


export default function App() {
  return (
    <View>
      <Text>Open up App.tsx to start!
      </Text>
      <Text>
        hello
      </Text>
      <Text>Test</Text>
      <StatusBar style="auto" />
    </View>
  )
}



