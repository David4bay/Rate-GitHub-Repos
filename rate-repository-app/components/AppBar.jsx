import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { theme } from './utils/theme';
import { rerouter } from './utils/utils';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBarColor,
    minWidth: 100,
    marginBottom: 18,
  },
  textStyle: {
    fontSize: 12,
    color: '#fff',
    // fontSize: 19,
    padding: 13,
    // fontWeight: 400
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row'
  }
});

  const horizontalStyle = [
    styles.horizontal
  ]

  const containerStyle = [
    styles.container
  ]

  const textStyles = [
    styles.textStyle
  ]

const AppBar = ({ status }) => {

  return (
  <View>
    <ScrollView horizontal style={containerStyle}>
    {status.map((linkTitle) => {

    const route = rerouter(linkTitle)
    return (
            <Link key={linkTitle} to={route} component={Pressable}>
              <Text style={textStyles}>{linkTitle}</Text>
            </Link>
    )
})}
</ScrollView>
  </View>
  );
};

export default AppBar