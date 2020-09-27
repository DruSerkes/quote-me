import React from 'react';
import Quote from '../Quote';
import { render } from '@testing-library/react';

describe('Quote tests', () => {
	it('should render without breaking', () => {
		render(<Quote />);
	});

	it('should match snapshot', () => {
		const { asFragment } = render(<Quote />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('should render Quote text', () => {
		const { getByText } = render(<Quote />);
		expect(getByText('Copy')).toBeInTheDocument();
		expect(getByText('New Quote')).toBeInTheDocument();
	});
});
