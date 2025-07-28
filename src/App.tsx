import React from 'react';
import { useState } from 'react';
import './App.css';
import CoinCounts from './components/CoinCounts';

const headsImage = 'https://m.media-amazon.com/images/I/51xs7F+tP5L._AC_.jpg';
const tailsImage = 'https://m.media-amazon.com/images/I/51bcZy+HZpL._AC_.jpg';

/**
 * A functional component that displays a coin flipper.
 * The component displays the last result of the coin flip,
 * the number of heads and tails, and a button to flip the coin.
 * When the button is clicked, the component displays an animation
 * of the coin flipping and then displays the result.
 * The component also keeps track of the number of heads and tails
 * and displays them in the UI.
 */
function App() {


    const [lastResult, setLastResult] = useState<string>('Click to flip the coin');
    const [countHeads, setHeadsCount] = useState<number>(0);
    const [countTails, setTailsCount] = useState<number>(0);
    const [isFliping, setFlipping] = useState<boolean>(false);
    const [image, setImage] = useState<string>(headsImage);
    /**
     * A function that flips a coin.
     * The function first checks if the coin is already flipping,
     * and if it is, it does nothing.
     * Then it starts an animation of the coin flipping
     * and after 3 seconds it stops the animation and
     * displays the result of the coin flip.
     * If the result is heads, it increments the count of heads,
     * otherwise it increments the count of tails.
     */
    const flipCoin = () => {
        if (isFliping) { return; }
        setFlipping(true);
        setImage(image === headsImage ? headsImage : tailsImage);
        const animationIntervalId = setInterval(() => { setImage(image => image === headsImage ? tailsImage : headsImage);}, 100)
        setTimeout(() => {
            clearInterval(animationIntervalId);
            const random = Math.random();
            console.log(random);
            const newImage = random > 0.5 ? headsImage : tailsImage;
            setLastResult(newImage === headsImage ? 'Heads' : 'Tails');
            setFlipping(false);
            newImage === headsImage ? setHeadsCount(countHeads + 1) : setTailsCount(countTails + 1);
            setImage(newImage);
        }, 3000);
    }
        ;
    return (
        <div className="App">
            <header className="App-header">
                <h1>הטלת מטבע</h1>
                
                {/* שינוי: עוטפים את התמונה והמונים ב-div חדש עם קלאס */}
                <div className="coin-display-container"> 
                    <img src={image} alt={lastResult} /> 
                    <div>
                        <p className="counts-text">Heads: {countHeads}</p>
                        <p className="counts-text">Tails: {countTails}</p> 
                    </div>
                </div>
                
                <button onClick={flipCoin} disabled={isFliping} className="flip-button">
                    Flip the coin
                </button>
                <p className="last-result-text">{lastResult}</p>
            </header>
        </div>
    );
}


export default App;
