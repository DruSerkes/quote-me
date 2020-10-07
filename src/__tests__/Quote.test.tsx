import React from 'react';
import Quote from '../Quote';
import { render, waitForDomChange, act } from '@testing-library/react';
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

describe('Quote tests', () => {
	fetch.mockResponse(JSON.stringify({ content: 'testing123', author: 'yer boi' }));

	it('should match snapshot', () => {
		const { asFragment } = render(<Quote />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('should render Quote text', async () => {
		const { getByText } = render(<Quote />);
		await waitForDomChange();

		expect(getByText('Copy')).toBeInTheDocument();
		expect(getByText('New Quote')).toBeInTheDocument();
		expect(fetch).toHaveBeenCalled();
		expect(getByText('"testing123"')).toBeInTheDocument();
		expect(getByText('yer boi')).toBeInTheDocument();
	});
});
