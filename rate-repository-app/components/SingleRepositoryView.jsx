import { useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import useRepositoryItem from './utils/hooks/useRepositoryItem'
import Loading from './utils/state/Loading'
import { useNavigate, useParams } from 'react-router'
import useLoggedIn from './utils/hooks/useLoggedIn'
import RenderItem from './RenderItem'
import SingleView from './SingleView'
import Reviews from './Reviews'
import { styles, theme } from './utils/theme'

const separatorStyle = [
  styles.separator
]

const ItemSeparator = () => <View style={separatorStyle} />;

const SingleRepositoryView = () => {

    const route = useParams()
    const navigate = useNavigate()
    const { data, error, loading, refetch } = useRepositoryItem(route.id)
    
    const user = useLoggedIn()

      useEffect(() => {
        if (!user?.data?.me?.id && Constants.expoConfig.extra.NODE_ENV !== 'test') {
          navigate("/")
        }
      }, [user?.data?.me?.id])
    
    if (loading || error) return <Loading loading={loading} error={error} />

    return (
        <FlatList
        data={data?.repository?.reviews?.edges}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <Reviews item={item} />}
        keyExtractor={({ node }) => node.id}
        ListHeaderComponent={() => <SingleView repository={data?.repository} />}
        />
    )
}

export default SingleRepositoryView