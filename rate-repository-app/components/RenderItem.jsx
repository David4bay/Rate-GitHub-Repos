import { View, StyleSheet, Image } from "react-native"
import StyledText from "./StyledText"

const styles = StyleSheet.create({
    container: {
      paddingLeft: 10
    },
    imageStyle: {
      width: 20,
      height: 20,
      resizeMode: 'stretch'
    }
  })

  const containerStyle = [
    styles.container
  ]

const RenderItem = ({item}) => {
  
    return (
      <View style={containerStyle}>
        <View>
        <Image style={styles.imageStyle} src={item.ownerAvatarUrl} alt='ownerAvatar4' />
        </View>
            <StyledText styledText >Full name: {item.fullName}</StyledText>
            <StyledText styledText >Description: {item.description}</StyledText>
            <StyledText styledText >Language: {item.language}</StyledText>
            <StyledText styledText >Stars: {item.stargazersCount}</StyledText>
            <StyledText styledText >Forks: {item.forksCount}</StyledText>
            <StyledText styledText >Rating: {item.ratingAverage}</StyledText>
            <StyledText styledText >Reviews: {item.reviewCount}</StyledText>
      </View>
    )
  }

  export default RenderItem