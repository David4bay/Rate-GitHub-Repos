import { View, StyleSheet, Image, FlatList } from "react-native"
import SingleRepoHeader from "./SingleRepoHeader"
import SingleRepoFooter from "./SingleRepoFooter"
import StyledText from "./StyledText"

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
      flexDirection: 'row',
      paddingLeft: 5
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