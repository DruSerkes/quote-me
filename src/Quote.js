import React, { useState, useEffect } from 'react';

export default (Quote = () => {
	const [ quote, setQuote ] = useState(null);
	const [ loading, setLoading ] = useState(true);

	useEffect(
		() => {
			const getQuote = async () => {
				setLoading(true);
				const params = new URLSearchParams({
					lang   : 'en',
					format : 'json',
					method : 'getQuote'
				});
				const res = await window.fetch('https://forismatic.com/en/api/' + params.toString());
				console.log('res == ', res);
				const data = res.json();
				console.log('data ==', data);
				setQuote(data);
				setLoading(false);
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
});
