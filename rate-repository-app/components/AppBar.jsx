import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import { rerouter } from './utils/utils';
import { Link } from 'react-router-native';
import { styles } from './utils/theme';
import useLoggedIn from './utils/hooks/useLoggedIn';

const AppBar = ({ status }) => {
  
  const containerStyle = [
    styles.container
  ]
  
  const textStyles = [
    styles.textStyle
  ]

  const {data, error, loading, refetch, handleLogout } = useLoggedIn()

  if (loading) return <Text> Loading... </Text>

  console.log("data in AppBar", data)
  
  return data.me ? (
    <View>
      <ScrollView horizontal style={containerStyle}>
            <Link to="repositories" component={Pressable}>
              <Text style={textStyles}>Repositories</Text>
            </Link>
            <Pressable onPress={handleLogout}>
              <Text style={textStyles}>Sign out</Text>
            </Pressable>
      </ScrollView>
    </View>
    ) : (
  <View>
    <ScrollView horizontal style={containerStyle}>
            <Link to="sign in" component={Pressable}>
              <Text style={textStyles}>Sign in</Text>
            </Link>
    </ScrollView>
  </View>
  )
}

export default AppBar