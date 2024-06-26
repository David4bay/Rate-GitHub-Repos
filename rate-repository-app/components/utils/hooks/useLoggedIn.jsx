import { LOGIN } from "../graphql/queries"
import { useApolloClient, useQuery } from "@apollo/client"
import useAuthStorage from "./useAuthStorage"
import { useNavigate } from "react-router"

const useLoggedIn = () => {

    const navigate = useNavigate()

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

    return { data, error, loading, refetch, handleLogout }
}

export default useLoggedIn