import React, { useState, useEffect, useRef } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Button, Main } from './styledComponents';
import ShowQuote from './ShowQuote';
import { copyText } from './helpers';

interface QuoteData {
	content: string;
	author: string;
}

const Quote: React.FC = () => {
	const [ quote, setQuote ] = useState<QuoteData | null>(null);
	const [ loading, setLoading ] = useState(true);
	const text = useRef('');

	useEffect(
		() => {
			const getQuote = async () => {
				try {
					setLoading(true);
					const res = await fetch('https://api.quotable.io/random');
					const { content, author } = await res.json();
					setQuote({ content, author });
					text.current = `"${content}" -${author}`;
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

	return (
		<div className="Quote">
			<Main className="Quote-Main">
				{loading ? (
					<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
				) : (
					<ShowQuote quote={quote} />
				)}
			</Main>
			<section className="Quote-Buttons">
				<Button onClick={() => copyText(text.current)}>Copy</Button>
				<Button onClick={getNewQuote}>Gimme Quote</Button>
			</section>
		</div>
	);
};

export default Quote;
