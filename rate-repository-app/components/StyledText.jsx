import { Text, StyleSheet } from "react-native"
import { theme } from "./utils/theme"

const textStyle = StyleSheet.create({
  text: {
    fontSize: 16,
  }
})

const StyledText = ({ name, styledText, children }) => {

  // console.log("typeof name", name)

    const useStyle = [
      styledText && textStyle.text,
      name ? theme.profileTitle : null
    ]
  
    return <Text style={useStyle}>{ children }</Text>
  }

  export default StyledText