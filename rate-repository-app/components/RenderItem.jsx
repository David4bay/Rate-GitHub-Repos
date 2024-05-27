import { View, StyleSheet, Image } from "react-native"
import StyledText from "./StyledText"

const styles = StyleSheet.create({
    container: {
      paddingLeft: 10
    },
    imageStyle: {
      width: 50,
      height: 50,
      borderRadius: 5
    }
  })

  const containerStyle = [
    styles.container
  ]

  const viewStyle = [
    styles.imageStyle
  ]

const RenderItem = ({item}) => {
  
    return (
      <View style={containerStyle}>
        <View>
        <Image style={viewStyle} src={item.ownerAvatarUrl} alt='ownerAvatar' />
        </View>
        <View>
            <StyledText styledText name >Full name: {item.fullName}</StyledText>
            <StyledText styledText >Description: {item.description}</StyledText>
            <StyledText styledText >Language: {item.language}</StyledText>
        </View>
        <View>
          <View>
            <StyledText styledText >Stars: {item.stargazersCount}</StyledText>
          </View>
          <View>
            <StyledText styledText >Forks: {item.forksCount}</StyledText>
          </View>
          <View>
            <StyledText styledText >Rating: {item.ratingAverage}</StyledText>
          </View>
          <View>
            <StyledText styledText >Reviews: {item.reviewCount}</StyledText>
          </View>
          </View>
      </View>
    )
  }

  export default RenderItem