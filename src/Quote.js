import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quote = () => {
	const [ quote, setQuote ] = useState(null);
	const [ loading, setLoading ] = useState(true);

	useEffect(
		() => {
			const getQuote = async () => {
				try {
					setLoading(true);
					const params = new URLSearchParams({
						lang   : 'en',
						format : 'json',
						method : 'getQuote'
					});
					const res = console.log('res == ', res);
					const data = res.data;
					console.log('data ==', data);
					setQuote(data);
				} catch (e) {
					console.log(e);
					setQuote();
				}
			};
			if (!quote) getQuote();
		},
		[ quote ]
	);

	if (loading) return <h1>Loading - add a spinner here</h1>;

	return (
		<main className="Quote">
			<h1>{quote}</h1>
			<button onClick={() => setQuote(null)}>Gimme Quote</button>
		</main>
	);
};

export default Quote;
