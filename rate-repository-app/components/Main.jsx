import { StyleSheet, Platform, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { theme } from './utils/theme';
import { Route, Navigate, Routes } from 'react-router-native'
import useSignin from '../components/utils/hooks/useSigin'
import SignIn from './SignIn';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from './utils/hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    minHeight: 100,
    overflow: 'scroll',
    fontFamily: Platform.OS === 'android' ? theme.fonts.android : theme.fonts.iOS,
  },
});

function Main() {
  
  const containerStyle = [styles.container];

  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage();
  const [signIn] = useSignin();

  const onSubmit = async ({ username, password }) => {
    console.log("username", username, "password", password);
    
    const credentials = { username, password };

    try {
      const data = await signIn(credentials);
      console.log("data", data);

      if (data?.authenticate?.accessToken) {
        const token = data.authenticate.accessToken;
        console.log("token in main", token);
        
        const tokenExists = await authStorage.getAccessToken();

        if (tokenExists) {
          await authStorage.removeAccessToken();
        }

        await apolloClient.resetStore()
        await authStorage.setAccessToken(token);
        console.log("access token from main", token);
      }
    } catch (e) {
      console.log(e);
    }
  };

return (
  <View style={containerStyle}>
    <AppBar />
    <Routes>
      <Route path="/" element={<SignIn onSubmit={onSubmit} />} />
      <Route path="/repositories" element={<RepositoryList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </View>
);
}

export default Main;