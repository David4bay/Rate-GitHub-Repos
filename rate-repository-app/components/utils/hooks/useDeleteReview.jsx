import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'
import { MY_REVIEWS } from '../graphql/queries'

const useDeleteReview = () => {

    const [deleteReview, { data, loading, error}] = useMutation(DELETE_REVIEW, {
        refetchQueries: [{ query: MY_REVIEWS, variables: { includeReviews: true }}],
        awaitRefetchQueries: true
    })

    const deleteTheReview = async (reviewId) => {
            const { data } = await deleteReview({ variables: { id: reviewId }}) 
            return data
    }

    return [deleteTheReview, { data, loading, error }]
}

export default useDeleteReview