import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Fetch } from 'util/Fetch';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test("fetch test" , async () => {
    render(<Fetch url="/greeting" renderSuccess={<pre>success</pre>} />)
});