import {render, screen, fireEvent} from '@testing-library/react';
import Login from '../components/Login';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter } from 'react-router-dom';

//jest.mock
//jest.spyOn

test('renders the component', () => {

    render(<BrowserRouter> <Provider store={store}> <Login/> </Provider> </BrowserRouter>);
    const loginText = screen.getAllByText('Login');
    expect(loginText.length).toBe(2);   
})

    