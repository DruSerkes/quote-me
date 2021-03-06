import React from 'react';
import Footer from '../Footer';
import { render } from '@testing-library/react';

describe('Footer tests', () => {
	it('should render without breaking', () => {
		render(<Footer />);
	});

	it('should match snapshot', () => {
		const { asFragment } = render(<Footer />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('should render footer text', () => {
		const { getByTestId } = render(<Footer />);
		expect(getByTestId('footer')).toHaveTextContent('Dru Serkes');
		expect(getByTestId('footer')).toHaveAttribute('href', 'https://github.com/druserkes');
	});
});
