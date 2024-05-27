// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './components/AppBar';
import RepositoryList from './components/RepositoryList';
import { notchTitle } from './components/utils/utils'

function App() {

  return (
    <View style={styles.container}>
      <AppBar status={notchTitle} />
      <RepositoryList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    minHeight: 100,
    marginRight: 10
  },
});

export default App