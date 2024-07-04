import { LOGIN } from "../graphql/queries"
import { useApolloClient, useQuery } from "@apollo/client"
import useAuthStorage from "./useAuthStorage"
import { useNavigate } from "react-router"

const useLoggedIn = () => {

    const navigate = useNavigate()

      /* istanbul ignore next */
    const { data, error, loading, refetch } = useQuery(LOGIN, {
        fetchPolicy: 'cache-and-network'
      })

      const authStorage = useAuthStorage()
      const apolloClient = useApolloClient()

      const handleLogout = async () => {
        await authStorage.removeAccessToken()
        await apolloClient.resetStore()
        navigate("/")
      }

        /* istanbul ignore next */
    return { data, error, loading, refetch, handleLogout }
}

export default useLoggedIn