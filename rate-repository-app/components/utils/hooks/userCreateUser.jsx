import { useMutation } from "@apollo/client"
import { CREATE_USER } from "../graphql/mutations"


const useCreateUser = () => {

    const [createUser, { data, loading, error }] = useMutation(CREATE_USER)

    const handleNewUser = async ({username, password }) => {
        const { data } = await createUser({ variables: { user: {username, password }}})
        console.log("user data from  handleNewUser", data)
        return data
    }
    console.log("user data from  useCreateUser", data)

    return [handleNewUser, { data, loading, error }]
}

export default useCreateUser