import { View, StyleSheet, Image } from "react-native"
import SingleRepoHeader from "./SingleRepoHeader"
import SingleRepoFooter from "./SingleRepoFooter"

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
    }
  })

  const RenderItem = ({item}) => {
    
    const containerStyle = [
      styles.container
    ]

    const viewStyle = [
      styles.imageStyle
    ]

    const profileStyle = [
      styles.contentStyle
    ]

    return (
      <View style={containerStyle}>
        <View style={profileStyle}>
          <Image style={viewStyle} src={item.ownerAvatarUrl} alt='ownerAvatar' />
          <SingleRepoHeader item={item} />
        </View>
        <View>
          <SingleRepoFooter item={item} />
        </View>
      </View>
    )
  }

  export default RenderItem