import { View, FlatList } from 'react-native'
import useMyReviews from './utils/hooks/useMyReviews'
import { useNavigate } from 'react-router';
import { styles } from './utils/theme';
import SingleReviews from './SingleReviews'
import Loading from './utils/state/Loading';

const separatorStyle = [
    styles.separator
  ]
  
  const ItemSeparator = () => <View style={separatorStyle} />;

const MyReviews = () => {

    const navigate = useNavigate()

    const { data, loading, error } = useMyReviews()
    
    if (loading) return <Loading loading={loading} error={error} />


    if (!data?.me?.id) {
        return navigate("/")
    }
    console.log("data in single reviews", data.me.reviews.edges)
    return (
        <FlatList
        data={data?.me?.reviews?.edges}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <SingleReviews item={item} />}
        keyExtractor={({ node }) => node.id}
        />
    )
}

export default MyReviews