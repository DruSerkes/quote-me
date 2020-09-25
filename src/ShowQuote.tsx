import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BlockQuote } from './styledComponents';

interface QuoteData {
	content: string;
	author: string;
}
type Props = {
	quote: QuoteData | null;
};

const ShowQuote: React.FC<Props> = ({ quote }) => {
	return (
        <React.Fragment>
            <BlockQuote>"{quote?.content}"</BlockQuote>
            <cite>{quote?.author}</cite>
        </React.Fragment>
	);
};

export default ShowQuote;
