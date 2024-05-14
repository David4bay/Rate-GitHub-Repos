// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './components/AppBar';
import RepositoryList from './components/RepositoryList';

export default function App() {

  const notchTitle = 'Repositories'

  return (
    <View style={styles.container}>
      <AppBar status={notchTitle} />
      <RepositoryList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // textOverflow: 'ellipsis',
    backgroundColor: '#fff',
    minHeight: '100vh'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
