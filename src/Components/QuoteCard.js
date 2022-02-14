import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteCard = () => {

    const [quote, setQuote] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {
        axios
            .get('https://simpsons-quotes-api.herokuapp.com/quotes')

            .then(response => {setQuote(response.data[0])})
    }, [count])

    return (
        <div>

            <h1> {quote.character}</h1>
            <img src = {quote.image} alt = "Simpson"/>
            <p> {quote.quote}</p>

            <button onClick={() => setCount(prevCount => prevCount + 1)}>clic</button>
        </div>
    );
};

export default QuoteCard;