import { View, StyleSheet, Image, Pressable } from "react-native"
import SingleRepoHeader from "./SingleRepoHeader"
import SingleRepoFooter from "./SingleRepoFooter"
import { Link } from "react-router-native"

const styles = StyleSheet.create({
    container: {
      paddingLeft: 10

    },

    imageStyle: {
      width: 50,
      height: 50,
      borderRadius: 5
    },
    
    contentStyle: {
      display: 'flex',
      flexDirection: 'row'
    },

    marginTop: {
      marginTop: 10
    }
  })

  const RenderItem = ({item}) => {
    
    const containerStyle = [
      styles.container,
      styles.marginTop
    ]

    const viewStyle = [
      styles.imageStyle
    ]

    const profileStyle = [
      styles.contentStyle
    ]

    return (
      <Link to={`/repositories/${item.id}`} component={Pressable}>
        <View style={containerStyle} testID="repositoryItem">
          <View style={profileStyle}>
            <Image style={viewStyle} src={item.ownerAvatarUrl} alt='ownerAvatar' />
            <SingleRepoHeader item={item} />
          </View>
          <View>
            <SingleRepoFooter item={item} />
          </View>
        </View>
      </Link> 
    )
  }

  export default RenderItem