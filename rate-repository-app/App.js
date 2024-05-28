// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './components/AppBar';
import RepositoryList from './components/RepositoryList';
import { theme } from './components/utils/theme';
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
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    minHeight: 'auto',
    minWidth: 100,
    overflow: 'scroll',
    fontFamily: theme.fonts.main,
    marginRight: 10
  },
});

export default App