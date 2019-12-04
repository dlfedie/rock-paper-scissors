import React, { Component, useState } from 'react';
import { connect } from 'react-redux';


function GamePage() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Game Page</h1>
            <p>You clicked on the Button of Counting {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me, Warrior!
            </button>
            <br></br>
            <button onClick={() => setCount(count - 1)}>
                What will this button do??
            </button>
            <br></br>
            <button onClick={() => setCount(0)}>
                RESET THE WARRIOR
            </button>
        </div>
    );
}

// create a giant panda callback to playfair
// goats and polybius shoutouts
// learn animations! see if i can make them fall into place or animate in some way
// base game will be rock paper scissors. no need to login/register, but if you do it'll track progress



// class GamePage extends Component {
//     render () {
//         return (
//             <div>
//                 <p>Hullo from game</p>
//             </div>
//         )
//     }
// }

export default GamePage;