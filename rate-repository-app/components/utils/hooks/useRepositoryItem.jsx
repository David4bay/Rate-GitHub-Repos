import { useQuery } from "@apollo/client"

import { GET_SINGLE_REPOSITORY } from '../graphql/queries'

const useRepositoryItem = (id) => {

    const { data, error, loading, refetch } = useQuery(GET_SINGLE_REPOSITORY, {
        variables: { repositoryId: id },
        skip: !id,
    })
    console.log("data", data, "id", id)
    return { data, error, loading, refetch }
}

export default useRepositoryItem