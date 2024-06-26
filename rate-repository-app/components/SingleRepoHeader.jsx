import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import { styles } from './utils/theme'

const SingleRepoHeader = ({ item }) => {

    const repoMainStyle = [
        styles.content
    ]

    return (
    <View style={repoMainStyle}>
        <StyledText styledText name>{item.fullName}</StyledText>
        <StyledText styledText gap wrap>{item.description}</StyledText>
        <StyledText styledText gap language>{item.language}</StyledText>
    </View>
    )
}

export default SingleRepoHeader