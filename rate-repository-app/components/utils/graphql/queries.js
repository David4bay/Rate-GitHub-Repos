import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
  repositories {
    edges {
      node {
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