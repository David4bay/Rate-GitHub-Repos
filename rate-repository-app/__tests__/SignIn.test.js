import SignIn from "../components/SignIn";
import { render, fireEvent, screen, waitFor } from '@testing-library/react-native';

describe('Sign in form', () => {
    it('calls the function provided to it', async  () => {

        const onSubmit = jest.fn();
        render(<SignIn onSubmit={onSubmit} />);

        fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');
        fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
        fireEvent.press(screen.getByText('Sign in'));
    
        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1);
    
            expect(onSubmit.mock.calls[0][0]).toEqual({
                username: 'kalle',
                password: 'password',
              });
        })
    })

})
