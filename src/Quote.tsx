import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

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
					setTimeout(() => setLoading(false), 500);
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

	if (loading) {
		return (
			<h3>
				Loading
				<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
			</h3>
		);
	}

	return (
		<main className="Quote">
			<blockquote>"{quote.content}"</blockquote>
			<cite>{quote.author}</cite>
			<button onClick={getNewQuote}>Gimme Quote</button>
		</main>
	);
};

export default Quote;
