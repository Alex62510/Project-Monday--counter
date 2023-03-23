import React, {useState} from 'react';
import './App.css';
import Counter from "./counter/Counter";

function App() {
    const [numbers, setNumbers] = useState<Array<number>>([0])
    const incNumber = () => {
        const countArray = [...numbers]
        countArray.push(0)
        setNumbers(countArray)
    }
    const resetNumber = () => {
        setNumbers([0])
    }

    return (
        <div className="App">
            <Counter
                numbers={numbers}
                incNumber={incNumber}
                resetNumber={resetNumber}
            />
        </div>
    );
}

export default App;
