import React, {useEffect, useState, useRef} from "react";
import './App.css';

const App = () =>{
    const [quotes, setQuotes] = useState('');
    const textRef=useRef();
    let colors = ["#ffff00","#90ee90", "#ffa500", "#ff68ff", "#a9a9e7"];
    const getQuote = () => {
        fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let randomNum=Math.floor(Math.random() * data.length);
            setQuotes(data[randomNum]);
        });
    }
    useEffect(()=>{
        getQuote();
    },[]);

    useEffect(()=>{
        textRef.current.style.color = colors[Math.floor(Math.random()*colors.length)];
    }, [quotes]);

    return (
        <div className="App">
        <div><h1>Gyaan</h1></div>
          
          <div className="quote">
              <p ref={textRef}>{quotes.text}</p>
              <p>Author: {quotes.author}</p>
              <div className="btnContainer">
                  <button className="btn" onClick={getQuote}>Get Quote</button>
                  <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
                  target="_blank" rel="noopener noreferrer" className="btn">Tweet</a>
              </div>
          </div>
        </div>
    );
}

export default App;