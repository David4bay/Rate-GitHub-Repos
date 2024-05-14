import { Text, StyleSheet } from "react-native"

const textStyle = StyleSheet.create({
  text: {
    fontSize: 16
  }
})

const StyledText = ({ styledText, children }) => {

    const useStyle = [
      styledText && textStyle.text
    ]
  
    return <Text style={useStyle}>{ children }</Text>
  }

  export default StyledText