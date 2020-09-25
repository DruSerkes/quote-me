import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {Button, BlockQuote, Main} from './styledComponents'
// import styled from 'styled-components';

// const Main = styled.main`
// 	padding: 3rem;
// 	width: 75%;
// 	margin: 0 auto;
// 	border-radius: 6px;
// 	opacity: 0.7;
// 	background: whitesmoke;
// `;

// const BlockQuote = styled.blockquote`
// 	text-align: center;
// 	font-size: 1.3rem;
// 	color: darkslategray;
// 	display: block;
// `;

// const Button = styled.button`
// 	display: block;
// 	margin: 1rem 0 0 75%;
// 	padding: 0.5rem 1rem;
// 	background-color: rgb(66, 184, 221);
// 	color: white;
// 	font-size: 1.2rem;
// 	font-family: copperplate;
// 	border-radius: 3px;
// 	text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
// `;

interface QuoteData {
	content: string;
	author: string;
};

const Quote: React.FC = () => {
	const [ quote, setQuote ] = useState<QuoteData | null>(null);
	const [ loading, setLoading ] = useState(true);

	useEffect(
		() => {
			const getQuote = async () => {
				try {
					setLoading(true);
					const res = await fetch('https://api.quotable.io/random');
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

	return (
		<div className="Quote">
			<Main className="Quote-Main">
				{loading 
				? <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
				:	<>
						<BlockQuote>"{quote?.content}"</BlockQuote>
						<cite>{quote?.author}</cite> 
					</>
				}
			</Main>

			<Button onClick={getNewQuote}>Gimme Quote</Button>
		</div>
	);
};

export default Quote;
