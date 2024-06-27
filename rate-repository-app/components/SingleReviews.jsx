import { View, Text, Pressable, Alert } from 'react-native'
import { Link } from 'react-router-native';
import { parseISO, format } from 'date-fns';
import { deleteReviewStyling, singleViewStyling, styles, theme } from './utils/theme'
import useDeleteReview from './utils/hooks/useDeleteReview';
import Loading from './utils/state/Loading';

const SingleReviews = ({ item }) => {

    const [deleteTheReview, { data, loading, error }] = useDeleteReview()

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

    const textStyles = [
        styles.textStyle
    ]

    const viewRepoButtonStyling = [
        deleteReviewStyling.viewRepoStyle
    ]

    const deleteRepoButtonStyling = [
        deleteReviewStyling.deleteRepoStyle
    ]

    const buttonContainerStyle = [
        singleViewStyling.buttonStyle
    ]

    const textColor = [
        deleteReviewStyling.textStyling
    ]

    const formattedDate = (date) => {
        const isoDateString = date;
        const parsedDate = parseISO(isoDateString)
        const preferredDate = format(parsedDate, 'dd.MM.yyyy')
        return preferredDate
    }

    const handleDelete = (id) => {
        Alert.alert(
            'Delete review',
            'Are you sure you want to delete this review?',
            [
                {
                    text: 'Cancel',
                    onPress: () => Alert.alert('Cancelled'),
                    // style: 'cancel',
                },
                {
                    text: 'Delete', 
                    onPress: async () => await deleteTheReview(id)
                },
                // {
                //     cancelable: true,
                // },
            ]
          );
        
    }

    if (data) {
        console.log(data)
    }
    console.log("item.node.repository", item.node.repository)
    if (loading) return <Loading loading={loading} error={error} />

    return (
        <View style={containerStyle}>
            <View style={headerStyle}>
                <View style={centerStyle}>
                    <Text style={textRatingStyle}>{item.node.rating}</Text>
                </View>
                <View>
                    <Text style={textPrimaryStyle}>{item.node.repository.fullName}</Text>
                    <Text style={textSecondaryStyle}>{formattedDate(item.node.createdAt)}</Text>
                </View>
            </View>
            <View>
                <View>
                    <Text style={textContentSyle}>{item.node.text}</Text>
                </View>
            </View>
            <View style={buttonContainerStyle}>
                <Link to={`/repositories/${item.node.repository.id}`} component={Pressable}>
                <Text style={viewRepoButtonStyling}>View repository</Text>
                </Link>
                <Pressable style={deleteRepoButtonStyling} onPress={() => handleDelete(item.node.id)}>
                    <Text style={textColor}>Delete review</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SingleReviews