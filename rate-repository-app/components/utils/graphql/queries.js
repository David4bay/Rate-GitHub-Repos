import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query getRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      edges {
        node {
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
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
query($repositoryId: ID!, $first: Int, $after: String) {
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
    reviews(first: $first, after: $after) {
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
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
`;

export const MY_REVIEWS = gql`
query getCurrentUser($includeReviews: Boolean = false) {
  me {
    id
    username
    reviews @include(if: $includeReviews) {
      edges {
        node {
          id
          text
          createdAt
          rating
          repository {
            id
            fullName
          }
        }
      }
    }
  }
}
`