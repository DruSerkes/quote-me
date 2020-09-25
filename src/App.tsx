import React from 'react';
import './App.css';
import Quote from './Quote';
import { H1 } from './styledComponents';

const App: React.FC = () => {
	return (
		<div className="App">
			<H1>Quote Generator</H1>
			<Quote />
		</div>
	);
};

export default App;
