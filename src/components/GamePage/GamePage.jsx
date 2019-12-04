import React, { Component, useState } from 'react';
import { connect } from 'react-redux';


function GamePage() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Game Page</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

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