import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'

const style = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    }
})

const SingleRepoHeader = ({ item }) => {

    const repoMainStyle = [
        style.content
    ]

    return (
    <View style={repoMainStyle}>
        <StyledText styledText name>{item.fullName}</StyledText>
        <StyledText styledText >Description: {item.description}</StyledText>
        <StyledText styledText >Language: {item.language}</StyledText>
    </View>
    )
}

export default SingleRepoHeader