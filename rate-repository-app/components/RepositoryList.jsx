import Loading from './utils/state/Loading';
import { useEffect } from 'react'
import RenderItem from './RenderItem';
import { theme } from './utils/theme';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import useRepositories from '../components/utils/hooks/useRepositories'
import { useNavigate } from 'react-router';
import useLoggedIn from './utils/hooks/useLoggedIn';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.textSecondary,
    marginBottom: 15
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  const { data } = useLoggedIn()
  const navigate = useNavigate()

  useEffect(() => {
    if (!data.me) {
      navigate("/")
    }
  }, [])

  const { repositories, loading, refetch, error } = useRepositories();

  const repositoryNodes = repositories ? repositories?.repositories?.edges?.map((edge) => edge.node) : []

  if (loading  || error) return <Loading loading={loading} error={error} />

  console.log("repositoryNode data", repositoryNodes)

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      // other props
      renderItem={RenderItem}
    />
  );
};

export default RepositoryList