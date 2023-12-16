import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});