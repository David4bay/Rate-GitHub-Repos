import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import useLoggedIn from './utils/hooks/useLoggedIn';
import { theme } from './utils/theme';

const AppBar = ({ status }) => {

 const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.appBarColor,
        minWidth: 100,
      },
      textStyle: {
        fontSize: 12,
        color: '#fff',
        padding: 13,
      }
    })
  
  const containerStyle = [
    styles.container
  ]
  
  const textStyles = [
    styles.textStyle
  ]

  const {data, error, loading, refetch, handleLogout } = useLoggedIn()

  if (loading) return <Text> Loading... </Text>
  
  return data.me ? (
    <View>
      <ScrollView horizontal style={containerStyle}>
            <Link to="/repositories" component={Pressable}>
              <Text style={textStyles}>Repositories</Text>
            </Link>
            <Link to="/my-reviews" component={Pressable}>
              <Text style={textStyles}>My reviews</Text>
            </Link>
            <Link to="/create-review" component={Pressable}>
              <Text style={textStyles}>Create a review</Text>
            </Link>
            <Pressable onPress={handleLogout}>
              <Text style={textStyles}>Sign out</Text>
            </Pressable>
      </ScrollView>
    </View>
    ) : (
  <View>
    <ScrollView horizontal style={containerStyle}>
            <Link to="/" component={Pressable}>
              <Text style={textStyles}>Sign in</Text>
            </Link>
            <Link to="/sign-up" component={Pressable}>
              <Text style={textStyles}>Sign up</Text>
            </Link>
    </ScrollView>
  </View>
  )
}

export default AppBar