import { render, screen, within } from '@testing-library/react-native';
import { MemoryRouter } from 'react-router';
import RepositoryListContainer from '../components/RepositoryListContainer';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      function formatNumber(num) {
        return new Intl.NumberFormat('en-US', {
          notation: "compact"
        }).format(num)
      }

      render(
      <MemoryRouter>
        <RepositoryListContainer repositories={repositories} />
      </MemoryRouter>
      );

      const repositoryItems = screen.getAllByTestId('repositoryItem');
      expect(repositoryItems).toHaveLength(2); // Assuming there are 2 repositories

      repositoryItems.forEach((item, index) => {
        const repository = repositories.edges[index].node;

        // Query within the repository item
        const repositoryItem = within(item);

        expect(repositoryItem.getByText(repository.fullName)).toBeDefined();

        expect(repositoryItem.getByText(repository.description)).toBeDefined();

        expect(repositoryItem.getByText(repository.language)).toBeDefined();

        expect(repositoryItem.getByText(formatNumber(repository.stargazersCount))).toBeDefined();

        expect(repositoryItem.getByText(formatNumber(repository.forksCount))).toBeDefined();

        expect(repositoryItem.getByText(formatNumber(repository.ratingAverage))).toBeDefined();

        expect(repositoryItem.getByText(formatNumber(repository.reviewCount))).toBeDefined();

      });
    });
  });
});
