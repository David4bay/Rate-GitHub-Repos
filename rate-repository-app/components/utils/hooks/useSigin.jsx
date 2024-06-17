import { useApolloClient, useMutation } from '@apollo/client';
import useAuthStorage from './useAuthStorage';
import LOGIN from '../graphql/mutations';

const useSignin = () => {
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
    const [authenticate, { data, loading, error }] = useMutation(LOGIN);

    const signIn = async ({ username, password }) => {
        console.log("username and password from useSignin hook", username, password);
        const { data } = await authenticate({ variables: { username, password } });
        
        if (data?.authenticate?.accessToken) {
            await authStorage.setAccessToken(data.authenticate.accessToken);
            apolloClient.resetStore();
        }
        
        return data;
    };

    return [signIn, { data, loading, error }];
};

export default useSignin;
