import { View, Image, Pressable, Text } from "react-native"
import SingleRepoFooter from "./SingleRepoFooter";
import SingleRepoHeader from "./SingleRepoHeader";
import { singleViewStyling, styles, theme } from "./utils/theme";
import * as Linking from 'expo-linking';

const separatorStyle = [
  styles.separator
]

const ItemSeparator = () => <View style={separatorStyle} />;

const SingleView = ({ repository }) => {

    const containerStyle = [
        styles.container,
        styles.marginTop
      ]
  
      const viewStyle = [
        styles.imageStyle
      ]
  
      const profileStyle = [
        singleViewStyling.contentStyle
      ]

      const linkStyle = [
        theme.profileLinkStyle
      ]

      const linkText = [
        theme.profileLinkText
      ]

    const openExternalLink = (url) => {
      Linking.openURL(url);
    }

    return (
      <>
        <View style={containerStyle} testID="repositoryItem">
          <View style={profileStyle}>
            <Image style={viewStyle} src={repository.ownerAvatarUrl} alt='ownerAvatar' />
            <SingleRepoHeader item={repository} />
          </View>
          <View>
            <SingleRepoFooter  item={repository} />
          </View>
          <View>
            <Pressable style={linkStyle} onPress={() => openExternalLink(`https://github.com/${repository.id}`)}>
              <Text style={linkText}>Open in GitHub</Text>
            </Pressable>
          </View>
        </View>
          <ItemSeparator />
        </>
    )
}

export default SingleView