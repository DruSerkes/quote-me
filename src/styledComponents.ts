import styled from 'styled-components';

export const Main = styled.main`
	padding: 3rem;
	width: 100%;
	border-radius: 6px;
	opacity: 0.7;
	background: whitesmoke;
`;

export const BlockQuote = styled.blockquote`
	text-align: center;
	font-size: 1.3rem;
	color: darkslategray;
	display: block;
`;

export const Button = styled.button`
	display: inline-block;
	cursor: pointer;
	margin: 0.3rem 0.4rem;
	padding: 0.2rem 0.7rem;
	background-color: black;
	border-color: white;
	color: white;
	font-size: 1.2rem;
	font-family: copperplate;
	border-radius: 4px;
	text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
	box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
	&:hover {
		border-left: none;
		border-right: none;
		border-top-width: 2px;
		border-bottom-width: 2px;
		border-top-style: solid;
		border-bottom-style: solid;
		border-top-color: white;
		border-bottom-color: white;
		background-color: black;
		transition: all 0.5s;
		color: white;
		transform: scale(1.1, 1);
	}
`;

export const H1 = styled.h1`
	margin: 0.8rem auto 0;
	color: white;
	font-size: 3rem;
`;
