import { View, Text, StyleSheet } from 'react-native'
import { parseISO, format } from 'date-fns';
import { styles, theme } from './utils/theme'

const Reviews = ({ item }) => {

    const containerStyle = [
        styles.contentStyle
    ]

    const headerStyle = [
        styles.headerStyle
    ]

    const textPrimaryStyle = [
        styles.textPrimary
    ]

    const textSecondaryStyle = [
        styles.textSecondary
    ]

    const textRatingStyle = [
        styles.textRating
    ]

    const centerStyle = [
        styles.centerStyle
    ]

    const textContentSyle = [
        styles.textContent
    ]

    const formattedDate = (date) => {
        const isoDateString = date;
        const parsedDate = parseISO(isoDateString)
        const preferredDate = format(parsedDate, 'dd.MM.yyyy')
        return preferredDate
    }

    return (
        <View style={containerStyle}>
            <View style={headerStyle}>
                <View style={centerStyle}>
                    <Text style={textRatingStyle}>{item.node.rating}</Text>
                </View>
                <View>
                    <Text style={textPrimaryStyle}>{item.node.user.username}</Text>
                    <Text style={textSecondaryStyle}>{formattedDate(item.node.createdAt)}</Text>
                </View>
            </View>
            <View>
                <View>
                    <Text style={textContentSyle}>{item.node.text}</Text>
                </View>
                </View>
        </View>
    )
}

export default Reviews