import React, { useState, useEffect } from 'react';

const Quote = () => {
	const [ quote, setQuote ] = useState(null);
	const [ loading, setLoading ] = useState(true);

	useEffect(
		() => {
			const getQuote = async () => {
				try {
					setLoading(true);
					const res = await window.fetch('https://api.quotable.io/random');
					const { content, author } = await res.json();
					setQuote({ content, author });
				} catch (e) {
					console.log(e);
					setQuote(null);
				} finally {
					setLoading(false);
				}
			};
			if (!quote) getQuote();
		},
		[ quote ]
	);

	const getNewQuote = () => {
		setQuote(null);
		setLoading(true);
	};

	if (loading) return <h3>Loading - add a spinner here</h3>;

	return (
		<main className="Quote">
			<blockquote>"{quote.content}"</blockquote>
			<cite>{quote.author}</cite>
			<button onClick={getNewQuote}>Gimme Quote</button>
		</main>
	);
};

export default Quote;
