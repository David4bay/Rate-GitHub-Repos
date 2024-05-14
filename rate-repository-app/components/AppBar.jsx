import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    minWidth: '100vw',
    marginBottom: "15px"
  },
  textStyle: {
        color: '#fff',
        fontSize: '17px',
        fontWeight: '1.2rem',
        padding: '10px'
  }
});

const AppBar = ({ status }) => {
  return <View style={styles.container}>
    <Text style={styles.textStyle}>
    { status }
    </Text>
    </View>;
};

export default AppBar;