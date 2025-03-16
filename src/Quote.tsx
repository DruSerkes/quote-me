import React, { useState, useEffect, useRef } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Button, Main } from "./styledComponents";
import ShowQuote from "./ShowQuote";
import { copyText } from "./helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const API_URL = "http://api.quotable.io/quotes/random";

interface QuoteData {
  content: string;
  author: string;
}

const Quote: React.FC = () => {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [toolTip, setToolTip] = useState("Copy");
  const text = useRef("");

  useEffect(() => {
    const getQuote = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        const { content, author } = (await res.json())[0];
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
  }, [quote]);

  const getNewQuote = () => {
    setQuote(null);
    setLoading(true);
  };

  const handleCopy = () => {
    copyText(text.current);
    setToolTip("Copied!");
    setTimeout(() => setToolTip("Copy"), 1500);
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
        <Button>
          <a
            id="tweet-quote"
            title="tweet this code"
            href={`https://twitter.com/intent/tweet?text=${text.current}`}
            target="_blank"
            rel="noopener noreferrer"
            className="Tweet-Button"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </Button>
        <Button onClick={handleCopy}>{toolTip}</Button>
        <Button onClick={getNewQuote}>New Quote</Button>
      </section>
    </div>
  );
};

export default Quote;
