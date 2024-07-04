import React from 'react';
import Constants from 'expo-constants';
import SignIn from "../components/SignIn";
import { MemoryRouter } from "react-router";
import { render, fireEvent, screen, waitFor } from '@testing-library/react-native';
import { MockedProvider } from '@apollo/client/testing';
import { LOGIN } from "../components/utils/graphql/queries";

// Mock the LOGIN query response
const mocks = [
  {
    request: {
      query: LOGIN,
      variables: {},
    },
    result: {
      data: {
        me: {
          id: '123',
          username: 'kalle',
        },
      },
    },
  },
];

describe('Sign in form', () => {
  it('calls the function provided to it', async () => {
    const onSubmit = jest.fn();
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <SignIn onSubmit={onSubmit} />
        </MemoryRouter>
      </MockedProvider>
    );

    fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');
    fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
    fireEvent.press(screen.getByText('Sign in'));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'kalle',
        password: 'password',
      });
    });
  });
});
