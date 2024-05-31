// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './components/AppBar';
import RepositoryList from './components/RepositoryList';
import { theme } from './components/utils/theme';
import { NativeRouter } from 'react-router-native'
import { notchTitle } from './components/utils/utils'
import Main from './components/Main';

function App() {

  return (
    <View>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </View>
  );
}

export default App