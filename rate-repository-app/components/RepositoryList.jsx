import Loading from './utils/state/Loading';
import { useState, useEffect } from 'react'
import useRepositories from '../components/utils/hooks/useRepositories'
import { useNavigate } from 'react-router';
import useLoggedIn from './utils/hooks/useLoggedIn';
import Constants from 'expo-constants';
import { useDebounce } from 'use-debounce'
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {

  const [searchedRepo, setSearchedRepo] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('LATEST')
  const [debouncedSearchKeyword] = useDebounce(searchedRepo, 1000)

  const navigate = useNavigate()
  const { data } = useLoggedIn()

  useEffect(() => {
    if (!data?.me?.id && Constants.expoConfig.extra.NODE_ENV !== 'test') {
      navigate("/")
    }
  }, [data?.me?.id])

  const { repositories, loading, refetch, error } = useRepositories({
      orderBy: selectedCategory === 'LATEST' ? 'CREATED_AT' : 'RATING_AVERAGE',
      orderDirection: selectedCategory === 'LOWEST' ? 'ASC' : 'DESC',
      searchKeyword: debouncedSearchKeyword,
    });

  const repositoryNodes = repositories ? repositories?.repositories?.edges?.map((edge) => edge.node) : []

  if (loading  || error) return <Loading loading={loading} error={error} />

  return (
   <RepositoryListContainer 
   repositories={repositoryNodes} 
   searchedRepo={searchedRepo}
   setSearchedRepo={setSearchedRepo}
   selectedCategory={selectedCategory}
   setSelectedCategory={setSelectedCategory}
   />
  );
};

export default RepositoryList