// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, Text, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { theme } from './utils/theme';
import { Route, Navigate, Routes } from 'react-router-native'
import { notchTitle } from './utils/utils'
import SignIn from './SignIn';

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
      // boxSizing: 'border-box',
      minHeight: 100,
      // minWidth: 100,
      overflow: 'scroll',
      
      fontFamily: Platform.OS === 'android' ? theme.fonts.android : theme.fonts.iOS,
      // marginRight: 10
    },
  });

function Main() {

    const containerStyle = [
        styles.container
    ]

    const onSubmit = () => {

    }

  return (
    <View style={containerStyle}>
      <AppBar status={notchTitle} />
      <Routes>
        <Route path="/" element={<SignIn onSubmit={onSubmit} />} />
        <Route path="/repositories" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </View>
  );
}

export default Main