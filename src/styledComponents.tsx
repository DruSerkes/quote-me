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
	font-size: 1.25rem;
	color: darkslategray;
	display: block;
`;

export const Button = styled.button`
	display: inline-block;
	cursor: pointer;
	margin: 0.25rem 0.5rem;
	padding: 0.25rem 0.75rem;
	background-color: black;
	border-color: white;
	color: white;
	font-size: 1.25rem;
	font-family: copperplate;
	border-radius: 4px;
	text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
	box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
`;

export const H1 = styled.h1`
	margin: 0.75rem auto 0;
	color: white;
	font-size: 3rem;
`;
