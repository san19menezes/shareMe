import React from "react";
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as router from 'react-router';
import Login from "../components/Login";

const navigate = jest.fn();

beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

describe('Login component', () => {
    xtest("Login component should render without crashing", () => {
        render(<Login />);
    });
    xtest("Login component should contain the google login button", () => {
        render(<Login />);
        expect(screen.getByRole('button', { name: /Sign in with Google/i })).toBeInTheDocument();
        // screen.debug();
        // screen.getByRole('')
    });
});
