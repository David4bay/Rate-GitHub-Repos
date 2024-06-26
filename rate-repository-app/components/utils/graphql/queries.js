import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
  repositories {
    edges {
      node {
        id
        description
        fullName
        forksCount
        language
        ownerAvatarUrl
        ratingAverage
        stargazersCount
        reviewCount
      }
    }
  }
}
`;

export const LOGIN = gql`
query {
  me {
    id
    username
  }
}
`

export const GET_SINGLE_REPOSITORY = gql`
query($repositoryId: ID!) {
  repository(id: $repositoryId) {
    id
    fullName
    ownerAvatarUrl
    description
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
    reviews {
      edges {
        node {
          id
          text
          createdAt
          rating
          user {
            id
            username
          }
        }
      }
    }
  }
}
`