import { useQuery } from '@apollo/client';
import { GET_SINGLE_REPOSITORY } from '../graphql/queries';

const useRepositoryReviews = (id, first, after) => {
  const { data, loading, fetchMore, error } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: { repositoryId: id, first, after },
    skip: !id
  });

  const handleFetchMore = () => {
    if (data?.repository.reviews.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          after: data.repository.reviews.pageInfo.endCursor,
        },
      });
    }
  };

  return {
    data: data ? data : undefined,
    loading,
    error,
    fetchMore: handleFetchMore,
  };
};

export default useRepositoryReviews;