import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
// import Home from './src/screens/Home';

import Routes from './src/routes/Routes';
//       <Home />
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
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