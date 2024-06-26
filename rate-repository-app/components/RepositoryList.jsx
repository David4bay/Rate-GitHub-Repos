import Loading from './utils/state/Loading';
import { useEffect } from 'react'
import useRepositories from '../components/utils/hooks/useRepositories'
import { useNavigate } from 'react-router';
import useLoggedIn from './utils/hooks/useLoggedIn';
import Constants from 'expo-constants';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {

  const navigate = useNavigate()
  const { data } = useLoggedIn()

  useEffect(() => {
    if (!data?.me?.id && Constants.expoConfig.extra.NODE_ENV !== 'test') {
      navigate("/")
    }
  }, [data?.me?.id])

  const { repositories, loading, refetch, error } = useRepositories();

  const repositoryNodes = repositories ? repositories?.repositories?.edges?.map((edge) => edge.node) : []

  if (loading  || error) return <Loading loading={loading} error={error} />

  return (
   <RepositoryListContainer repositories={repositoryNodes} />
  );
};

export default RepositoryList