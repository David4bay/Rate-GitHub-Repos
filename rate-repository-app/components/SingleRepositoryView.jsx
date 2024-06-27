import { useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import Loading from './utils/state/Loading'
import { useNavigate, useParams } from 'react-router'
import useLoggedIn from './utils/hooks/useLoggedIn'
import RenderItem from './RenderItem'
import SingleView from './SingleView'
import Reviews from './Reviews'
import { styles, theme } from './utils/theme'
import useRepositoryReviews from './utils/hooks/useRepositoryReviews'

const separatorStyle = [
  styles.separator
]

const ItemSeparator = () => <View style={separatorStyle} />;

const SingleRepositoryView = () => {

    const route = useParams()
    console.log("route", route)
    const navigate = useNavigate()

    const { data, loading, error, fetchMore } = useRepositoryReviews(route.id, 3)
    
    const user = useLoggedIn()

      useEffect(() => {
        if (!user?.data?.me?.id && Constants.expoConfig.extra.NODE_ENV !== 'test') {
          navigate("/")
        }
      }, [user?.data?.me?.id])
    
    if (loading || error) return <Loading loading={loading} error={error} />
    console.log("data", data)
    return (
        <FlatList
        data={data?.repository?.reviews?.edges}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <Reviews item={item} />}
        keyExtractor={({ node }) => node.id}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={() => <SingleView repository={data?.repository} />}
        />
    )
}

export default SingleRepositoryView