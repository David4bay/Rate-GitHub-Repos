import { gql } from '@apollo/client'

const LOGIN = gql`
 mutation Authenticate($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`
export default LOGIN