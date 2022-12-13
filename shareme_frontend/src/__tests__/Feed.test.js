import React from "react";
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Feed from "../components/Feed";

describe('Feed component', () => {
    test("Feed component should render without crashing", () => {
        render(<Feed />);
    });
});

