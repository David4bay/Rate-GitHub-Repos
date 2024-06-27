import { gql } from '@apollo/client'

const LOGIN = gql`
 mutation Authenticate($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`
export default LOGIN

export const CREATE_REVIEW = gql`
mutation Mutation($review: CreateReviewInput) {
  createReview(review: $review) {
    id
    text
    createdAt
    rating
    repositoryId
    user {
      id
      username
    }
  }
}
`

export const CREATE_USER = gql`
mutation CreateUser($user: CreateUserInput) {
  createUser(user: $user) {
    createdAt
    id
    username
    reviewCount
  }
}
`

export const DELETE_REVIEW = gql`
mutation deleteReview($id: ID!) {
  deleteReview(id: $id)
}
`