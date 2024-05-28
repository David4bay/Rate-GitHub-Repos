import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'

const style = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 15,
    }
})

const SingleRepoHeader = ({ item }) => {

    const repoMainStyle = [
        style.content
    ]

    return (
    <View style={repoMainStyle}>
        <StyledText styledText name>{item.fullName}</StyledText>
        <StyledText styledText gap>{item.description}</StyledText>
        <StyledText styledText gap language>{item.language}</StyledText>
    </View>
    )
}

export default SingleRepoHeader