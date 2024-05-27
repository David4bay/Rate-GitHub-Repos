import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { theme } from './utils/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBarColor,
    minWidth: 100,
    marginBottom: 18,
  },
  textStyle: {
    color: '#fff',
    fontSize: 17,
    padding: 15,
  }
});


  const containerStyle = [
    styles.container
  ]

const AppBar = ({ status }) => {
  return (
  <Pressable style={containerStyle}>
    <Text style={styles.textStyle}>
      { status }
    </Text>
  </Pressable>
  );
};

export default AppBar;