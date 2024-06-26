import { StyleSheet, Platform, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { theme } from './utils/theme';
import { Route, Navigate, Routes } from 'react-router-native'
import useSignin from '../components/utils/hooks/useSigin'
import SignIn from './SignIn';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from './utils/hooks/useAuthStorage';
import SingleRepositoryView from './SingleRepositoryView';
import ReviewForm from './ReviewForm';
import SignUp from './SignUp';
// import SingleView from './SingleView';

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
    
    const credentials = { username, password };

    try {
      const data = await signIn(credentials);

      if (data?.authenticate?.accessToken) {
        const token = data.authenticate.accessToken;
        
        const tokenExists = await authStorage.getAccessToken();

        if (tokenExists) {
          await authStorage.removeAccessToken();
        }

        await apolloClient.resetStore()
        await authStorage.setAccessToken(token);
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
      <Route path="/create-review/" element={<ReviewForm />} />
      <Route path="/repositories/" element={<RepositoryList />} />
      <Route path="/repositories/*">
        <Route path=":id" element={<SingleRepositoryView />} />
      </Route>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </View>
);
}

export default Main;