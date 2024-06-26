import { Text, StyleSheet } from "react-native"
import { languageStyling, theme } from "./utils/theme"


const StyledText = ({ gap, name, styledText, language, bigText, grey, wrap, children }) => {

  const languageStyling = StyleSheet.create({
    tagStyle: {
      display: 'flex',
      backgroundColor: theme.colors.primary,
      maxWidth: 'max-content',
      alignSelf: 'flex-start',
      color: '#fff',
      borderRadius: 5,
      fontWeight: grey ? 600 : 300,
      fontSize: grey ? theme.fontSizes.body : theme.fontSizes.subheading
    }
  })

  const useStyle = [
      styledText && theme.textStyle,
      name && theme.profileTitle,
      gap && theme.profileGap,
      language && theme.languageStyle,
      language && languageStyling.tagStyle,
      bigText && theme.boldText,
      grey && theme.repoNumberStat,
      wrap && theme.wrapText
    ]
  
    return <Text style={useStyle}>{ children }</Text>
  }

  export default StyledText