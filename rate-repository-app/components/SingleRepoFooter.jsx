import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'

const styles = StyleSheet.create({
    listSyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

const SingleRepoFooter = ({ rowActive, item}) => {

    const rowStyle = [
        styles.listSyle
    ]

    return (
        <View style={rowStyle}>
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
    )
}

export default SingleRepoFooter
