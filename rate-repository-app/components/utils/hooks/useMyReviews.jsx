import { useQuery } from "@apollo/client"

import { MY_REVIEWS } from '../graphql/queries'

const useMyReviews = () => {

    const { data, error, loading, refetch } = useQuery(MY_REVIEWS, {
        variables: { includeReviews: true },
    })

    return { data, error, loading, refetch }
}

export default useMyReviews