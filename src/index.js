import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// Tạo component App
function App() {
    const [counter, setCounter] = useState(1);
    const handleIncrease = () => {
        setCounter(counter + 1);
    }
    return (
        <div style={{padding:20}}>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))

