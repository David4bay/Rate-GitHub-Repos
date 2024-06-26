import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'

const useCreateReview = () => {

    const [createReview, { data, loading, error}] = useMutation(CREATE_REVIEW)

    const submitReview = async ({ ownerName, rating, repositoryName, text }) => {
            const { data } = await createReview({ variables: { review: { ownerName, rating, repositoryName, text }} }) 
            return data
    }

    return [submitReview, { data, loading, error }]
}

export default useCreateReview