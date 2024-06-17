// import { StatusBar } from 'expo-status-bar';
import createApolloClient from './components/utils/apolloClient'
import RepositoryList from './components/RepositoryList';
import { StyleSheet, Text, View } from 'react-native';
import { notchTitle } from './components/utils/utils'
import { NativeRouter } from 'react-router-native'
import { ApolloProvider } from '@apollo/client'
import AuthStorage from './components/utils/authStorage';
import AuthStorageContext from './components/contexts/authContext';
import Main from './components/Main';

const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)

function App() {
  
  return (
    <View>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </View>
  );
}

export default App